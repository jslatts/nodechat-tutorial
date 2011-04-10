StartTest(function(t) {
    
    use.paths.unshift('localLib/root4')
    
    if (!Joose.is_NodeJS) t.harness.absolutizeINC(use.paths)
    
    
    t.plan(1)
    

    //==================================================================================================================================================================================
    //t.diag("Testing of loading several classes in a single file")
    
    var async1 = t.beginAsync()
    
    Class('Some.Class', {
        use     : 'BasicTest1',
        
        does    : Joose.I.FutureClass('BasicRole1'),
        
        
        body    : function () {
            
            var instance = new Some.Class()
            
            t.ok(instance.result() == 3, 'Class has correct role applied')
            
            t.endAsync(async1)
        }
    })
    
})