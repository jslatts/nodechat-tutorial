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
    console.log('GET /login');
    res.render('login');
});

app.get('/disconnect', function(req, res){
    res.render('disconnect');
});

app.post('/login', function(req, res){
    console.log('POST /login');
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
                req.session.hashPass = user.hashPass || 'No Hash';

                console.log('Storing new hash for user ' + user.name + ': ' + req.session.hash);
                res.redirect('/');
            });
        } else {
            req.session.error = 'Authentication failed, please check your username and password.';
            res.redirect('back');
        }
    });
});

app.get('/*.(js|css)', function(req, res){
    res.sendfile('./'+req.url);
});

app.get('/', restrictAccess, function(req, res){
    res.render('index', {
        locals: { name: req.session.user.name, hashPass: JSON.stringify(req.session.hashPass) }
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

socket.on('connection', function(client){
    activeClients += 1;
    client.on('disconnect', function(){clientDisconnect(client)});
    client.on('message', function(msg){chatMessage(client, socket, msg)});

    client.send({
        event: 'initial',
        data: nodeChatModel.xport()
    });

    socket.broadcast({
        event: 'update',
        clients: activeClients
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
