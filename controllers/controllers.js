//
//Controllers
//
var NodeChatController = {
    init: function(options) {
        var ioc, user, view, hashpassword;

        ioc = io.connect('http://localhost')
        this.socket = ioc;


        user = this.userName = options.userName;
        hashpassword = this.hashpassword = options.hashpassword

        this.model = new models.NodeChatModel();
        this.view = new NodeChatView({model: this.model, socket: this.socket, el: $('#content')});
        view = this.view;

        this.socket.on('connect', function () { 

            ioc.emit('clientauthrequest', {
                user: user
                , hashpassword: hashpassword
            });

            log('Connected! Oh hai!');
        }); 

        this.socket.on('chat', function(msg) {view.msgReceived(msg)});
        this.socket.on('initial', function(msg) {view.initReceived(msg)});
        this.socket.on('update', function(msg) {view.updReceived(msg)});

        this.view.render();

        return this;
    }
};
