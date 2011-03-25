/*!
 * nodechat.js
 * Copyright(c) 2011 Justin Slattery <justin.slattery@fzysqr.com> 
 * MIT Licensed
 */

/**
 * Include core dependencies.  
 */
var _ = require('underscore')._
    , Backbone = require('backbone')

/**
 * Include our own modules
 */
var models = require('./models/models')
    , auth = require('./lib/auth');

/**
 * Require redis and setup the client 
 */
var redis = require('redis')
    , rc = redis.createClient()

rc.on('error', function(err) {
    console.log('Error ' + err);
});

/**
 * Setup connect, express, socket, and the connect-redis session store
 */
var express = require('express')
    , app = express.createServer()
    , connect = require('connect')
    , jade = require('jade')
    , socket = require('socket.io').listen(app)
    , redisStore = require('connect-redis');

app.set('view engine', 'jade');
app.set('view options', {layout: false});
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({ store: new redisStore(), secret: 'Secretly I am an elephant' }));

/**
 * Route: GET /login
 *
 * Template: login.jade 
 */
app.get('/login', function(req, res){
    res.render('login');
});

/**
 * Route: POST /login
 *
 * Calls the authentication module to verify login details. Failures are redirected back to the login page.
 *
 * If the authentication module gives us a user object back, we ask connect to regenerate the session and send the client back to index. Note: we specify a _long_ cookie age so users won't have to log in frequently. We also set the httpOnly flag to false (I know, not so secure) to make the cookie available over [Flash Sockets](http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/net/Socket.html).
 */ 
app.post('/login', function(req, res){
    auth.authenticateUser(req.body.username, req.body.password, function(err, user){
        if (user) {
            // Regenerate session when signing in to prevent fixation 
            req.session.regenerate(function(){
                // Store the user's primary key in the session store to be retrieved, or in this case the entire user object
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

/**
 * Route: GET /signup:
 *
 * Template: signup.jade
 */
app.get('/signup', function(req, res){
    res.render('signup');
});

/**
 * Route: POST /signup
 *
 * Calls createNewUserAccount() in the auth module, redirects to /login if a user object is returned. Redirects to /signup if not.
 */
app.post('/signup', function(req, res) {
    auth.createNewUserAccount(req.body.username, req.body.password1, req.body.password2, req.body.email, req.body.ponies, function(err, user){
        if ((err) || (!user)) {
            req.session.error = 'New user failed, please check your username and password.';
            res.redirect('back');
        }
        else if(user) {
            res.redirect('/login');
        }
    });

});

/**
 *  Tell connect to destory the session.
 */

app.get('/logout', function(req, res){
    req.session.destroy(function(){
        res.redirect('home');
    });
});


/**
 * Serve up any static file requested by the client
 *
 * TODO: should restrict this to only server *public* routes.
 */
app.get('/*.(js|css)', function(req, res){
    res.sendfile('./'+req.url);
});

/**
 * Server up the main index view. 
 *
 * Calls the restrictAccess() middleware.
 *
 *
 *
 */
app.get('/', restrictAccess, function(req, res){
    res.render('index', {
        locals: { name: req.session.user.name, hashPass: JSON.stringify(req.session.user.hashPass) }
    });
});

/**
 *  Middleware that decides what a valid login looks like. In this case, just verify that we have a session object for the user.
 *
 *  This is an express [route middleware](http://expressjs.com/guide.html#route-middleware). Control is passed to the middleware function before the route function is called. We use restrictAccess() to verify that we have a valid user key in the session, implying that authentication has succeeded, before we send the client to the index.jade template. If we do not have a valid user in the session, then we redirect to the '/login' route. This effectively locks down our '/' route from unauthenticated access. You could add the restrictAccess() all to any route you want to protect.
 */
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

/**
 * When we have a client that shouldn't be connected, __kick 'em off!__' 
 * 
 * @param {object} client
 * @param {function} fn
 */
function disconnectAndRedirectClient(client, fn) {
    console.log('Disconnecting unauthenticated user');
    client.send({ event: 'disconnect' });
    client.connection.end();
    return fn();
}

/*
 *
 * Handle the new connection event for socket. 
 * 
 * connectSession() is a helper method that will verify a client's validity by checking for a cookie in the request header, then, if we find it,  _pulling their session out of redis_. 
 *
 * We then use the helper method in the 'connection' handler for our socket listener. Instead accepting any user connection, we are going to check that the client has a valid session (meaning they logged in). If they don't, give them the boot! If they do, then we store a copy of the session data (yay we have access!) in the client object and then setup the rest of the socket events. Finally, send them a welcome message just to prove that we remembered their profile. 
 */
socket.on('connection', function(client){
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

        client.user = data.user;

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

/*
 * Event handler for new chat messages. Stores the chat in redis and broadcasts it to all connected clients.
 * 
 * @param {object} client
 * @param {object} socket
 * @param {json string} msg
 */
function chatMessage(client, socket, msg){
    var chat = new models.ChatEntry();
    chat.mport(msg);

    rc.incr('next.chatentry.id', function(err, newId) {
        chat.set({id: newId});
        nodeChatModel.chats.add(chat);
        
        var expandedMsg = chat.get('id') + ' ' + client.user.name + ': ' + chat.get('text');
        console.log('(' + client.sessionId + ') ' + expandedMsg);

        rc.rpush('chatentries', chat.xport(), redis.print);
        rc.bgsave();

        socket.broadcast({
            event: 'chat',
            data:chat.xport()
        }); 
    }); 
}

/*
 * Event handler for client disconnectes. Simply broadcasts the new active client count.
 * 
 * @param {object} client
 */
function clientDisconnect(client) {
    activeClients -= 1;
    client.broadcast({clients:activeClients})
}

/**
 * Fire up the webserver 
 */
app.listen(8000)
