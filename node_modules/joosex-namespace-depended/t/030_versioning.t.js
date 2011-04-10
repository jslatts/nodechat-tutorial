StartTest(function(t) {
    
    use.paths.unshift('localLib/root1', 'localLib/root2')
    
    if (!Joose.is_NodeJS) t.harness.absolutizeINC(use.paths)
    
    JooseX.Namespace.Depended.Manager.my.disableCaching = false

    
    //==================================================================================================================================================================================
    t.diag("Versioning")
    
    
    Class("Test", {
        
        VERSION     : 0.02,
        
        body : function () {
            
            t.ok(Test.meta.VERSION == 0.02, 'Correct version in the module `body` w/o deps')
        }
    })
    
    
    
    var async1 = t.beginAsync()
    
    Class("StressTest.Versioning", {
        
        VERSION     : 0.02,
        
        use : { 
            'StressTest.Test097' : 0.05,
            'StressTest.Test098' : 0.05
        },
        
        body : function () {
            
            t.ok(StressTest.Versioning.meta.VERSION == 0.02, 'Correct version in the module `body` w/ deps')
            
            t.throws_ok(function(){
                Module("Testy", {
                    use : { 'StressTest.Test097' : 1.01 }
                })
            }, Joose.is_IE ? '' : 'Cant increase required version', 'Required version cant be increased on loaded resources')

            
            t.ok(StressTest.Test097, "StressTest.Test097 module created")
            t.ok(StressTest.Test097.meta.constructor == Joose.Meta.Class, "StressTest.Test097 class created")
            t.ok(StressTest.Test097.meta.hasMethod('result'), "StressTest.Test097 has method 'result'")
            t.ok(new (StressTest.Test097)().result() == 97, "StressTest.Test097 can be instantiated")
            
            
            t.ok(StressTest.Test097.meta.resource.version == StressTest.Test097.meta.VERSION, "StressTest.Test097 received a VERSION value")
            t.ok(StressTest.Test097.meta.VERSION >= 0.05, "StressTest.Test097 has higher version than required")
            
            t.ok(StressTest.Test098, "StressTest.Test098 module created")
            t.ok(StressTest.Test098.meta.constructor == Joose.Meta.Class, "StressTest.Test098 class created")
            t.ok(StressTest.Test098.meta.hasMethod('result'), "StressTest.Test098 has method 'result'")
            t.ok(new (StressTest.Test098)().result() == 98, "StressTest.Test098 can be instantiated")
            
            t.ok(StressTest.Test098.meta.resource.version >= 0.05, "StressTest.Test098 has higher version than required")
            
            t.endAsync(async1)
            
            t.done()
        }
    })
    
    t.ok(StressTest.Versioning, "Something in the Versioning module spot")
})
