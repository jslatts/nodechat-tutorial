StartTest(function(t) {
    
    use.paths.unshift('localLib/root1', 'localLib/root2', '/inc')
    
    if (!Joose.is_NodeJS) t.harness.absolutizeINC(use.paths)
    
    
    t.plan(3)
    
    var async1 = t.beginAsync()
    
    
    //==================================================================================================================================================================================
    //t.diag("Using Joose.I.FutureClass for attributes declaration")
    
    Class('TestClass', {
        
        use : 'Chain1',
        
        has : {
            
            metaClass : Joose.I.FutureClass('Chain1')
        },
        
        
        body : function () {
            //==================================================================================================================================================================================            
            t.diag("Using Joose.I.FutureClass for attributes declaration")
            
            t.ok(TestClass, 'TestClass was created')
            t.ok(Chain1, 'Chain1 was created')
            
            var test = new TestClass()
            
            t.ok(test.metaClass == Chain1, "Attribute 'metaclass' was initialized correctly")
            
            t.endAsync(async1)
        }
    })
    
})