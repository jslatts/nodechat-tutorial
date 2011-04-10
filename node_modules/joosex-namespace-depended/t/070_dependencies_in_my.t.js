StartTest(function(t) {
    
    use.paths.unshift('localLib/root1', 'localLib/root2', 'localLib/root3')
    
    if (!Joose.is_NodeJS) t.harness.absolutizeINC(use.paths)
    
//    JooseX.Namespace.Depended.Manager.my.disableCaching = false
    
    t.plan(18)
    
    //==================================================================================================================================================================================
    //t.diag("Specifiying dependency in 'my' singleton")
    
    var async1 = t.beginAsync()
    
    Class('TestClass', {
        
        my : {
            does : 'BasicRole1'
        },
        
        
        body : function () {
            //==================================================================================================================================================================================
            t.diag("Specifiying dependency in 'my' singleton")
            
            t.ok(TestClass.my.res1 == 'res1', "Attribute 'res1' was correctly composed into 'my' instance")
            
            TestClass.my.process1()
            t.ok(TestClass.my.res1 == 'processed1', ".. the same about the 'process1' method")
            
            t.endAsync(async1)
        }
    
    })
    
    
    //==================================================================================================================================================================================
    //t.diag("Dependency from class, which have depended 'my' singleton")
    
    var async2 = t.beginAsync()
    
    use('WithDependedMy', function () {
        //==================================================================================================================================================================================
        t.diag("Dependency from class, which have depended 'my' singleton")
        
        t.ok(typeof Chain1 == 'function', "Dependency of 'WithDependedMy' was loaded")
        
        t.ok(WithDependedMy, "WithDependedMy was created")
        t.ok(WithDependedMy.my, ".. and it has a singleton")
        
        t.ok(WithDependedMy.my.result() == 'withDependedMy', "And it has correct 'result' method")
        
        t.endAsync(async2)
    })
    
    
    
    //==================================================================================================================================================================================
    //t.diag("Stressed test, with mixed dependencies in usual class and 'my' singletons")
    
    var async3 = t.beginAsync()
    
    Class('MyMixed', {
        
        use : [ 'Chain1.Middle.Chain2', 'WithDependedMy2'],
    
        body : function () {
            //==================================================================================================================================================================================
            t.diag("Stressed test, with mixed dependencies in usual class and 'my' singletons")
            
            t.ok(typeof MyMixed == 'function', "Class was created")
            
            //Chain1.Middle.Chain2 checkin
            t.ok(typeof Chain1.Middle.Chain2 == 'function', "Chain1.Middle.Chain2 was created")
            t.ok(new Chain1.Middle.Chain2().result() == 2, "... and it works correctly")
            
            
            //WithDependedMy2 checkin            
            t.ok(WithDependedMy2, "Class 'WithDependedMy2' was created")
            
            var withDep2 = new WithDependedMy2()
            
            t.ok(withDep2.res2 == 'res2', "And it has composed 'res2' attribute")
            
            withDep2.process2()
            
            t.ok(withDep2.res2 == 'processed2', "And it has composed 'process2' method")
            
            
            //WithDependedMy2.my checkin
            var my = WithDependedMy2.my
            
            t.ok(my, "Class 'WithDependedMy2' has singleton")
            t.ok(my.result() == 'withDependedMy2', "And it has native 'result' method")
            
            t.ok(typeof Chain1 == 'function', "'Chain1' was created")
            
            
            t.ok(my.sugar == 'sweet', "'WithDependedMy2.my' has a correct 'sugared' attribute via additional builder")
            
            
            t.ok(my.res3 == 'res3', "And it has composed 'res3' attribute")
            
            my.process3()
            
            t.ok(my.res3 == 'processed3', "And it has composed 'process3' method")
            
            
            t.endAsync(async3)
        }
    })
    
})