/*!
 * nodechat.js
 * Copyright(c) 2011 Justin Slattery <justin.slattery@fzysqr.com> 
 * MIT Licensed
 */

/*
 * Include core dependencies.  
 */
var _ = require('underscore')._
    , Backbone = require('backbone');

/*
 * Include our own modules
 */
var models = require('./models/models')
    , auth = require('./lib/auth');

/*
 * Require redis and setup the client 
 */
var redis = require('redis')
    , rc = redis.createClient();

rc.on('error', function (err) {
    console.log('Error ' + err);
});

/*
 * Setup connect, express, socket, and the connect-redis session store
 */
var express = require('express')
    , app = express.createServer()
    , connect = require('connect')
    , jade = require('jade')
    , io = require('socket.io').listen(app);

app.set('view engine', 'jade');
app.set('view options', {layout: false});
app.use(express.bodyParser());

/* 
 * signInAccount() determines whether we are logging in, or creating an account by checking the request object for an email form field in the body and handling them appropriately. Upon successful authentication or account creation, the username and hashed password are passed to express in the local variables collection and rendered into the index template.
 */
function signInAccount(req, res) {
    if (req.body.email) {
        auth.createNewUserAccount(req.body.username, req.body.password, req.body.email, function (err, user) {
            if ((err) || (!user)) {
                res.redirect('back');
            }
            else if (user) {
                res.render('index', {
                    locals: { name: user.name, hashpassword: JSON.stringify(user.hashPass) }
                });
            }
        });
    }
    else {
        auth.authenticateUser(req.body.username, req.body.password, function (err, user) {
            if (err) {
                winston.error('[signInAccount][authenticateUser][fn] Error: ' + err);
            }

            if (user) {
                res.render('index', {
                    locals: { name: user.name, hashpassword: JSON.stringify(user.hashPass) }
                });
            } 
            else {
                res.redirect('back');
            }
        });
    }
}

/*
 * The _connection_ event handler creates a closure with a new instance of the purgatory() function. It then sets up an anonymous function to handle client _message_ events. Each time a message is received from this client, stillInPurgatory() is called. If it returns true, we will only accept _clientauthrequest_ messages. If that happens to be what we just received, call tryToGetOut(). We pass tryToGetOut() a callback to call if the client successfully gets out of purgatory.
 *  
 * If stillInPurgatory() returns false, then handle the message as a regular chat message.
 */
function purgatory() {
    var inPurgatory = true;
    return {
        tryToGetOut: function (message, client, cb) {
            if (!message || !message.user || !message.hashpassword) {
                winston.info('[purgatory][tryToGetOut] Client with no user/hash attempting message. Client still in purgatory');
                return;
            }
            auth.authenticateUserByHash(message.user, message.hashpassword, function(err, data) {
                if (err) {
                    winston.info('[purgatory] Bad auth. Client still in purgatory');
                    inPurgatory = true;
                }
                else {
                    winston.info('[purgatory] out of purgatory');
                    inPurgatory = false;

                    //Once we are sure the client is who s/he claims to be, attach name and hash for future use.
                    client.user = message.user;
                    client.hashpassword = message.hashpassword;

                    cb && cb();
                }
            });
        }
        , stillInPurgatory: function() {
            winston.info('[purgatory] status ' + inPurgatory);
            return inPurgatory;
        }
    }
}

/*
 * Route: POST /
 *
 * Calls the authentication module to verify login details. Failures are redirected back to the login page.
 *
 * If the authentication module gives us a user object back, we ask connect to regenerate the session and send the client back to index. Note: we specify a _long_ cookie age so users won't have to log in frequently. We also set the httpOnly flag to false (I know, not so secure) to make the cookie available over [Flash Sockets](http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/net/Socket.html).
 */ 
app.post('/', function (req, res) {
    signInAccount(req, res)
});

/*
 *  redirect back to the login page
 */
app.get('/logout', function (req, res) {
    res.redirect('/');
});


/*
 * Serve up any static file requested by the client
 *
 * TODO: should restrict this to only server *public* routes.
 */
app.get('/*.(js|css)', function (req, res) {
    res.sendfile('./' + req.url);
});

/*
 * Server up login page.
 *
 * Template: login.jade 
 */
app.get('/', function (req, res) {
    res.render('login');
});

//create local state
var activeClients = 0;
var nodeChatModel = new models.NodeChatModel();


/*
 * Event handler for client disconnects. Simply broadcasts the new active client count.
 * 
 * @param {object} client
 */
function clientDisconnect(client) {
    activeClients -= 1;
    client.broadcast.emit('update', activeClients);
}

/*
 * Event handler for new chat messages. Stores the chat in redis and broadcasts it to all connected clients.
 * 
 * @param {object} client
 * @param {json string} msg
 */
function chatMessage(client, msg) {
    var chat = new models.ChatEntry();
    chat.mport(msg);
    chat.set({name: client.user});

    rc.incr('next.chatentry.id', function (err, newId) {
        chat.set({id: newId});
        nodeChatModel.chats.add(chat);
        
        var expandedMsg = chat.get('id') + ' ' + client.user + ': ' + chat.get('text');

        rc.rpush('chatentries', chat.xport(), redis.print);

        io.sockets.emit('chat',chat.xport()); 
    }); 
}

/*
 * Handle the new connection event for socket. 
 * 
 */
io.sockets.on('connection', function (client) {
    var clientPurgatory = purgatory();

    client.on('clientauthrequest', function(message) {
        if (clientPurgatory.stillInPurgatory()) {
              //If we can get out of purgatory, set up the client for pubsub
              clientPurgatory.tryToGetOut(message, client, function () {
                  activeClients += 1;
                  winston.info('clients: ' + activeClients);
                  io.sockets.emit('update', activeClients);

                  client.on('disconnect', function () {
                      clientDisconnect(client);
                  });
              });
        }
    });

    client.on('chat', function(message) {
        if (!clientPurgatory.stillInPurgatory()) {
          //If this is called, we are not in purgatory, so handle it normally
          chatMessage(client, message);
        }
    });
});

/*
 * Fire up the webserver 
 */
app.listen(8001);
