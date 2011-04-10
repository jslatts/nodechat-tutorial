StartTest(function(t) {
    
    use.paths.unshift('localLib/root1', 'localLib/root2')
    
    if (!Joose.is_NodeJS) t.harness.absolutizeINC(use.paths)
    
    
    t.plan(7)
    

    //==================================================================================================================================================================================
    t.diag("Meta class with additional resources specificator")
    
    Role('AlsoDepends', {
        
        after : {
            alsoDependsFrom : function (extend, summaredDeps) {
                this.collectDependencies(extend.additional, summaredDeps)
                this.collectDependencies(extend.also, summaredDeps)
                
                delete extend.additional
                delete extend.also
            }
        }
        
    
    })
    
    t.ok(AlsoDepends, "'AlsoDepends' was created")
    
    Joose.Namespace.Manager.meta.extend({
        does : AlsoDepends
    })
    
    var async1 = t.beginAsync()
    
    
    //==================================================================================================================================================================================
    //t.diag("Gathering resources from non-standard builders")
    
    Class('TestClass', {
        
        also : {
            'Chain1' : 0.1
        },
        
        additional : [ 'BasicTest1' ],
        
        
        body : function () {
            //==================================================================================================================================================================================            
            t.diag("Gathering resources from non-standard builders")
            
            t.ok(TestClass, 'TestClass was created')
            t.ok(Chain1, 'Chain1 was loaded')
            t.ok(BasicTest1, 'BasicTest1 was loaded')
            t.ok(BasicTest2, 'BasicTest2 was loaded also')
            
            t.ok(new BasicTest1().result() == 1, 'BasicTest1 works correctly')
            t.ok(new BasicTest2().result() == 2, 'BasicTest2 works correctly')
            
            t.endAsync(async1)
        }
    })
    
})