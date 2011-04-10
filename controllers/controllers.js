//
//Controllers
//
var NodeChatController = {
    init: function(options) {
        var mySocket, user, view, hashpassword;

        this.socket = new io.Socket(null, {port: 8001});
        mySocket = this.socket;
        user = this.userName = options.userName;
        hashpassword = this.hashpassword = options.hashpassword

        this.model = new models.NodeChatModel();
        this.view = new NodeChatView({model: this.model, socket: this.socket, el: $('#content')});
        view = this.view;

        this.socket.on('connect', function () { 
            
            mySocket.send({
                event: 'clientauthrequest'
                , user: user
                , hashpassword: hashpassword
            });

            log('Connected! Oh hai!');
        }); 

        this.socket.on('message', function(msg) {view.msgReceived(msg)});
        this.socket.connect();

        this.view.render();

        return this;
    }
};
