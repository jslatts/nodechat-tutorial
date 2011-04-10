StartTest(function(t) {
    
    use.paths.unshift('localLib/root5')
    
    if (!Joose.is_NodeJS) t.harness.absolutizeINC(use.paths)
    

    //==================================================================================================================================================================================
    t.diag("Dependencies in attribute specification")
    
    var async1 = t.beginAsync()
    
    use('com.nilbog.game.client.Application', function () {
        
        t.ok(com.nilbog.game.client.Application, 'com.nilbog.game.client.Application is here')
        t.ok(com.nilbog.game.client.MessageWindow, 'com.nilbog.game.client.MessageWindow is here')
        
        t.endAsync(async1)
        
        t.done()
    })
})