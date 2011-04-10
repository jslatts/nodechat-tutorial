StartTest(function(t) {
    
    use.paths.unshift('localLib/root2')
    
    if (!Joose.is_NodeJS) t.harness.absolutizeINC(use.paths)
    

    //==================================================================================================================================================================================
    t.diag("Dependencies in attribute specification")
    
    var async1 = t.beginAsync()
    
    use('BasicTest6.js', function () {
        
        t.ok(typeof someGlobalVar == 'boolean', 'Global var has been established')
        
        t.endAsync(async1)
        t.done()
    })
})