//
//Controllers
//
var NodeChatController = {
    init: function(options) {
        this.socket = new io.Socket(null, {port: 8000});
        var mysocket = this.socket;
        this.userName = options.userName;
        this.hashPass = options.hashPass;

        this.model = new models.NodeChatModel({userName: this.userName, hashPass: this.hashPass});
        this.view = new NodeChatView({model: this.model, socket: this.socket, el: $('#content')});
        var view = this.view;

        this.socket.on('message', function(msg) {view.msgReceived(msg)});
        this.socket.connect();

        this.view.render();

        return this;
    }
};
