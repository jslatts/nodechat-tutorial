StartTest(function(t) {
    
    use.paths.unshift('localLib/root1', 'localLib/root2')
    
    if (!Joose.is_NodeJS) t.harness.absolutizeINC(use.paths)
    
//    JooseX.Namespace.Depended.Manager.my.disableCaching = false
    
    t.plan(18)
    
    //==================================================================================================================================================================================
    //t.diag("Dependency in 'isa' builder")
    
    var async1 = t.beginAsync()
    
    Class("Basic", {
        isa : { BasicTest7 : 0.01 },
        
        body : function(){
            t.diag("Dependency in 'isa' builder")
            
            t.ok(Basic.meta.constructor == Joose.Meta.Class, 'Class Basic was created')
            t.ok(!Basic.meta.stem.opened, 'Stem of class Basic is closed')
            
            var basic = new Basic()
            t.ok(basic.result() == 7, "And it has inherited 'result' method")
            
            t.endAsync(async1)
        }
    })

    
    //==================================================================================================================================================================================
    //t.diag("Multiple dependency in 'does' builder")
    
    var async2 = t.beginAsync()
    
    Class("Basic1", {
        isa : { BasicTest7 : 0.01 },
        
        does : {
           BasicRole1 : 0.01,
           BasicRole2 : 0.01
        },
        
        body : function(){
            t.diag("Multiple dependency in 'does' builder")
            
            t.ok(Basic1.meta.constructor == Joose.Meta.Class, 'Class Basic1 was created')
            t.ok(!Basic1.meta.stem.opened, 'Stem of class Basic is closed')
            
            var basic = new Basic1()
            t.ok(basic.result() == 7, "And it has inherited 'result' method")
            
            t.ok(basic.res1 == 'res1', "And it has composed 'res1' attribute")
            t.ok(basic.res2 == 'res2', "And it has composed 'res2' attribute")
            
            basic.process1()
            basic.process2()
            
            t.ok(basic.res1 == 'processed1', "And it has composed 'process1' method")
            t.ok(basic.res2 == 'processed2', "And it has composed 'process2' method")
            
            t.endAsync(async2)
        }
    })

    
    //==================================================================================================================================================================================
    //t.diag("Chained dependency in 'metaRoles' builder")
    
    var async3 = t.beginAsync()
    
    Class("Basic2", {
        isa : { BasicTest7 : 0.01},
        
        does : [ 'BasicRole3' ],
        
        sugar : '',
        
        body : function(){
            t.diag("Chained dependency in 'metaRoles' builder")
            
            t.ok(Basic2, 'Class Basic2 was created')
            t.ok(Basic2.meta.meta.isDetached, '.. and its meta is detached')
            t.ok(!Basic2.meta.stem.opened, 'Stem of class Basic2 is closed')
            
            var basic = new Basic2()
            t.ok(basic.result() == 7, "And it has inherited 'result' method")
            
            t.ok(basic.res3 == 'res3', "And it has composed 'res3' attribute")
            basic.process3()
            t.ok(basic.res3 == 'processed3', "And it has composed 'res3' method")
            
            t.ok(Basic2.meta.hasAttribute('sugar'), "And it has 'sugar' attribute, received via builder from metarole")
            t.ok(basic.sugar == 'sweet', "'sugar' attribute has correct value")
            
            t.endAsync(async3)
        }
    })
    
    
})