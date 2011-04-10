StartTest(function(t) {
    
    use.paths.unshift('localLib/root1', 'localLib/root2')
    
    if (!Joose.is_NodeJS) t.harness.absolutizeINC(use.paths)
    
    
    t.plan(26)
    
    var async1 = t.beginAsync()
    
    //==================================================================================================================================================================================
    //t.diag("Dependency from lazy class")
    
    Class('TestLazy.Lazy1', {
        
        use : [ 'Chain1', 'Lazy.Lazy1' ],
        
        body : function () {
            //==================================================================================================================================================================================            
            t.diag("Dependency from lazy class")
            
            t.ok(typeof Lazy.Lazy1 == 'function', "Class 'Lazy.Lazy1' was loaded")
            
            t.ok(Lazy.Lazy1.meta.pending, "Class 'Lazy.Lazy1' is pending for construction")
            t.ok(!Lazy.Lazy1.prototype.result, '.. indeed')
            
            Lazy.Lazy1.$meta()
            
            t.ok(!Lazy.Lazy1.meta.pending, "Class 'Lazy.Lazy1' was constructed")
            t.ok(Lazy.Lazy1.prototype.result, '.. indeed')
            
            t.endAsync(async1)
        }
    })
    
    
    //==================================================================================================================================================================================
    //t.diag("Dependency of lazy class")
    
    var async2 = t.beginAsync()

    use([ 'Lazy.Lazy2' ], function () {
        
        //==================================================================================================================================================================================
        t.diag("Class were loaded but not constructed")
        
        t.ok(typeof Lazy.Lazy2 == 'function', "Class 'Lazy.Lazy2' was loaded")
        
        t.ok(Lazy.Lazy2.meta.pending, "Class 'Lazy.Lazy2' is pending for construction")
        t.ok(!Lazy.Lazy2.prototype.result, '.. indeed')
        
        
        //==================================================================================================================================================================================
        t.diag("Dependencies of lazy class")
        
        t.ok(typeof Chain1.Middle.Chain2 == 'function', "Dependencies of 'Lazy.Lazy2' were loaded")
        t.ok(new Chain1.Middle.Chain2().result() == 2, "... and works correctly")
        
        
        //WithDependedMy2.my checkin
        var my = WithDependedMy2.my
        
        t.ok(my, "Class 'WithDependedMy2' has singleton")
        t.ok(my.result() == 'withDependedMy2', "And it has native 'result' method")
        
        t.ok(typeof Chain1 == 'function', "'Chain1' was created")
        
        
        t.ok(my.sugar == 'sweet', "'WithDependedMy2.my' has a correct 'sugared' attribute via additional builder")
        
        
        t.ok(my.res3 == 'res3', "And it has composed 'res3' attribute")
        
        my.process3()
        
        t.ok(my.res3 == 'processed3', "And it has composed 'process3' method")
        
        
        var lazy = new Lazy.Lazy2()
        
        t.ok(!Lazy.Lazy2.meta.pending, "Class 'Lazy.Lazy2' was constructed")
        t.ok(Lazy.Lazy2.prototype.result, '.. indeed')
        
        
        //==================================================================================================================================================================================
        t.diag("Dependency from lazy class inside of 'use'")
        
        Class('TestLazy.Lazy4', {
            
            use : 'Lazy.Lazy4',
        
            body : function () {
                //==================================================================================================================================================================================            
                t.diag("Dependency from lazy class")
                
                t.ok(typeof Lazy.Lazy3 == 'function', "Class 'Lazy.Lazy3' was loaded")
                
                t.ok(Lazy.Lazy3.meta.pending, "Class 'Lazy.Lazy3' is pending for construction")
                t.ok(!Lazy.Lazy3.prototype.result, '.. indeed')
                
                Lazy.Lazy3.$meta()
                
                t.ok(!Lazy.Lazy3.meta.pending, "Class 'Lazy.Lazy3' was constructed")
                t.ok(Lazy.Lazy3.prototype.result, '.. indeed')

                
                
                t.ok(typeof Lazy.Lazy4 == 'function', "Class 'Lazy.Lazy4' was loaded")
                
                t.ok(Lazy.Lazy4.meta.pending, "Class 'Lazy.Lazy4' is pending for construction")
                
                Lazy.Lazy4.$meta()
                
                t.ok(!Lazy.Lazy4.meta.pending, "Class 'Lazy.Lazy4' was constructed")
                
                
                t.endAsync(async2)
            }
        })
    })
})