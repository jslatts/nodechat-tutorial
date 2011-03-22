//
//Controllers
//
var NodeChatController = {
    init: function() {
        this.socket = new io.Socket(null, {port: 8000});
        var mysocket = this.socket;

        this.model = new models.NodeChatModel();
        this.view = new NodeChatView({model: this.model, socket: this.socket, el: $('#content')});
        var view = this.view;

        this.socket.on('message', function(msg) {view.msgReceived(msg)});
        this.socket.connect();

        this.view.render();

        return this;
    }
};

//
// Bootstrap the app
//
$(document).ready(function () {
    window.app = NodeChatController.init({});
});

