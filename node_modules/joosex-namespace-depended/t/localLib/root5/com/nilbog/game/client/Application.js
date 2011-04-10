Module('com.nilbog', function (m) {
    
    Module('game.client', function (m) {
        
        Class('Application', {
            
            use: ['com.nilbog.game.client.MessageWindow'],
            
            has: { messageWindow: { is: 'ro' } },
            
            methods: {
                start: function () {
                    this.messageWindow = new m.MessageWindow();
                }
            }
        })
    })
})