StartTest(function(t) {
    
    use.paths.unshift('localLib/root1', 'localLib/root2')
    
    if (!Joose.is_NodeJS) t.harness.absolutizeINC(use.paths)

    
    t.plan(3)
    
    //==================================================================================================================================================================================
    //t.diag("Use in anonymous classes")
    
    var async0 = t.beginAsync()
    
    Class({
        
        isa : 'BasicTest2',
        
        body : function (Basic0) {
            t.diag("Use in anonymous classes")
            
            t.ok(BasicTest2.meta.constructor == Joose.Meta.Class, 'Basic dependencies loading passed #2-1')
            t.ok(new BasicTest2().result() == 2, "And it work as expected #2-2")
            
            t.ok(new Basic0().result() == 2, "Basic0 inherited 'result' from BasicTest2")
            
            t.endAsync(async0)
        }
    })
    
})