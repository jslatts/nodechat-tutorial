var express = require('express')
    , app = express.createServer()
    , connect = require('connect')
    , jade = require('jade')
    , socket = require('socket.io').listen(app)
    , _ = require('underscore')._
    , Backbone = require('backbone')
    , models = require('./models/models')
    , auth = require('./lib/auth');

var redis = require('redis')
    , rc = redis.createClient()
    , redisStore = require('connect-redis');

rc.on('error', function(err) {
    console.log('Error ' + err);
});


//configure express to use jade
app.set('view engine', 'jade');
app.set('view options', {layout: false});

//configure express to use redis as session store
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({ store: new redisStore(), secret: 'Secretly I am an elephant' }));


//setup routes
app.get('/logout', function(req, res){
    // destroy the user's session to log them out
    // will be re-created next request
    req.session.destroy(function(){
        res.redirect('home');
    });
});

app.get('/login', function(req, res){
    res.render('login');
});


app.post('/login', function(req, res){
    auth.authenticateUser(req.body.username, req.body.password, function(err, user){
        if (user) {
            // Regenerate session when signing in
            // to prevent fixation 
            req.session.regenerate(function(){
                // Store the user's primary key 
                // in the session store to be retrieved,
                // or in this case the entire user object
                console.log('regenerated session id ' + req.session.id);
                req.session.cookie.maxAge = 100 * 24 * 60 * 60 * 1000; //Force longer cookie age
                req.session.cookie.httpOnly = false;
                req.session.user = user;

                console.log('Storing new hash for user ' + user.get('name') + ': ' + req.session.user.get('hashPass'));
                res.redirect('/');
            });
        } else {
            req.session.error = 'Authentication failed, please check your username and password.';
            res.redirect('back');
        }
    });
});

app.get('/signup', function(req, res){
    res.render('signup');
});

app.post('/signup', function(req, res) {
    auth.createNewUserAccount(req.body.username, req.body.password1, req.body.password2, req.body.email, req.body.ponies, function(err, user){
        if (err) {
            req.session.error = 'New user failed, please check your username and password.';
            res.redirect('back');
        }
        else if(user) {
            res.redirect('/login');
        }
    });

});

app.get('/*.(js|css)', function(req, res){
    res.sendfile('./'+req.url);
});

app.get('/', restrictAccess, function(req, res){
    res.render('index', {
        locals: { name: req.session.user.name, hashPass: JSON.stringify(req.session.user.hashPass) }
    });
});

//This method decides what a valid login looks like. In this case, just verify that we have a session object for the user
function restrictAccess(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        req.session.error = 'Access denied!';
        res.redirect('/login');
    }
};


//create local state
var activeClients = 0;
var nodeChatModel = new models.NodeChatModel();


function disconnectAndRedirectClient(client, fn) {
    console.log('Disconnecting unauthenticated user');
    client.send({ event: 'disconnect' });
    client.connection.end();
    fn();
    return;
}

socket.on('connection', function(client){
    // helper function that goes inside your socket connection
    client.connectSession = function(fn) {
        if (!client.request || !client.request.headers || !client.request.headers.cookie) {
            disconnectAndRedirectClient(client,function() {
               console.log('Null request/header/cookie!');
            });
            return;
        }

        console.log('Cookie is' + client.request.headers.cookie);

        var match = client.request.headers.cookie.match(/connect\.sid=([^;]+)/);
        if (!match || match.length < 2) {
            disconnectAndRedirectClient(client,function() {
                console.log('Failed to find connect.sid in cookie')
            });
            return;
        }

        var sid = unescape(match[1]);

        rc.get(sid, function(err, data) {
            fn(err, JSON.parse(data));
        });
    };

    client.connectSession(function(err, data) {
        if(err) {
            console.log('Error on connectionSession: ' + err);
            return;
        }

        activeClients += 1;
        client.on('disconnect', function(){clientDisconnect(client)});
        client.on('message', function(msg){chatMessage(client, socket, msg)});

        console.log('User successfully connected with ' + data.user.name + ' hash ' + data.user.hashPass); 

        socket.broadcast({
            event: 'update',
            clients: activeClients
        });

        var ponyWelcome = new models.ChatEntry({name: 'PonyBot', text: 'Hello ' + data.user.name + '. I also feel that ponies ' + data.user.ponies + '. Welcome to nodechat.js'});

        socket.broadcast({
            event: 'chat',
            data: ponyWelcome.xport()
        });
    });
});

function chatMessage(client, socket, msg){
    var chat = new models.ChatEntry();
    chat.mport(msg);

    rc.incr('next.chatentry.id', function(err, newId) {
        chat.set({id: newId});
        nodeChatModel.chats.add(chat);
        
        var expandedMsg = chat.get('id') + ' ' + chat.get('name') + ': ' + chat.get('text');
        console.log('(' + client.sessionId + ') ' + expandedMsg);

        rc.rpush('chatentries', chat.xport(), redis.print);
        rc.bgsave();

        socket.broadcast({
            event: 'chat',
            data:chat.xport()
        }); 
    }); 
}

function clientDisconnect(client) {
    activeClients -= 1;
    client.broadcast({clients:activeClients})
}

app.listen(8000)
