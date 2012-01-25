//
//Views
//

var ChatView = Backbone.View.extend({
    tagName: 'li',

    initialize: function(options) {
        _.bindAll(this, 'render');
        this.model.bind('all', this.render);
    },

    render: function() {
        $(this.el).html(this.model.get("name") + ": " + this.model.get("text"));
        return this;
    }
});

var ClientCountView = Backbone.View.extend({
    initialize: function(options) {
        _.bindAll(this, 'render');
        this.model.bind('all', this.render);
    }
    , render: function() {
        this.el.html(this.model.get("clients"));
        return this;
    }
});

var NodeChatView = Backbone.View.extend({
    initialize: function(options) {
        _.bindAll(this, 'sendMessage');
        this.model.chats.bind('add', this.addChat);
        this.socket = options.socket;
        this.clientCountView = new ClientCountView({model: new models.ClientCountModel(), el: $('#client_count')});
    }

    , events: {
        "submit #messageForm" : "sendMessage"
    }

    , addChat: function(chat) {
        var view = new ChatView({model: chat});
        $('#chat_list').append(view.render().el);
    }


    , initReceived: function(message) {
        this.model.mport(message);
    }

    , msgReceived: function(message) {
        var newChatEntry = new models.ChatEntry();
        newChatEntry.mport(message);
        this.model.chats.add(newChatEntry);
    }

    , updReceived: function(message) {
        log('count received' + message);
        this.clientCountView.model.updateClients(message);
    }

    , sendMessage: function(){
        var inputField = $('input[name=message]');
        var chatEntry = new models.ChatEntry({text: inputField.val()});
        this.socket.emit('chat', chatEntry.xport());
        inputField.val('');
    }
});
