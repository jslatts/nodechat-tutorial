StartTest(function(t) {
    
    use.paths.unshift('localLib/root1', 'localLib/root2')
    
    if (!Joose.is_NodeJS) t.harness.absolutizeINC(use.paths)

    
    t.plan(37)
    
    //==================================================================================================================================================================================
    t.diag("Very basic testing of dependencies loading")
    
    var async0 = t.beginAsync()
    
    Module("Basic0", {
        use : 'BasicTest2',
        
        body : function () {
            t.diag("Very basic testing of dependencies loading")
            
            t.ok(Basic0.meta.resource.ready, 'Basic0 module is now ready')
            
            t.ok(BasicTest2.meta.constructor == Joose.Meta.Class, 'Basic dependencies loading passed #2-1')
            t.ok(new BasicTest2().result() == 2, "And it work as expected #2-2")
            
            t.endAsync(async0)
        }
    })
    
    t.ok(Basic0, 'Basic0 module was created')
    
    var res0 = JooseX.Namespace.Depended.Manager.my.getResource('joose://Basic0')
    t.ok(res0 == Basic0.meta.resource, 'Resources pool works correctly')
    
    t.ok(Basic0.meta.resource.loaded, 'Basic0 module is considered loaded')
    t.ok(!Basic0.meta.resource.loading, 'Basic0 module is considered not loading')
    t.ok(!Basic0.meta.resource.ready, 'Basic0 module is not ready yet')
    
    //==================================================================================================================================================================================
    t.diag("Basic testing of dependencies loading")
    
    var async1 = t.beginAsync()
    
    Module("Basic1", {
        use : [ 'BasicTest1', 'BasicTest2' ],
        
        body : function() {
            t.diag("Basic testing of dependencies loading")
            
            t.ok(BasicTest1.meta.constructor == Joose.Meta.Class, 'Basic dependencies loading passed #1-1')
            t.ok(new BasicTest1().result() == 1, "And it work as expected #1-2")
            
            t.ok(BasicTest2.meta.constructor == Joose.Meta.Class, 'Basic dependencies loading passed #2-1')
            t.ok(new BasicTest2().result() == 2, "And it work as expected #2-2")
            
            t.endAsync(async1)
        }
    })
    
    t.ok(Basic1, 'Basic1 module was created')
    t.ok(Basic1.meta.resource.loaded, 'Basic1 module is considered loaded')
    t.ok(!Basic1.meta.resource.loading, 'Basic1 module is considered not loading')
    t.ok(!Basic1.meta.resource.ready, 'Basic1 module is not ready yet')
    
    
    //==================================================================================================================================================================================
    t.diag("Dynamic (in-code) dependency loading")
    
    var async2 = t.beginAsync()
    
    use('BasicTest3', function (ns) {
        t.diag("Dynamic (in-code) dependency loading")
        
        t.ok(BasicTest3.meta instanceof Joose.Meta.Class, 'Dynamic (in code context) basic dependencies loading passed')
        t.ok(new BasicTest3().result() == 3, 'Dynamic (in code context) basic dependencies loading passed #2')
        
        
        t.ok(Joose.Namespace.Manager.my.getCurrent() == ns, "Dynamic 'use' executes body in the global namespace")
        
        t.ok(ns == Joose.Namespace.Manager.my.global, "Dynamic 'use' executes body in the global namespace")
        t.ok(this == Joose.top, ".. and in the outerest scope")
        
        t.endAsync(async2)
    })
    
    
    t.skipIf(Joose.is_NodeJS, "XHR requests won't work in Node", function (){
        
        //==================================================================================================================================================================================
        t.diag("Loading from external url")
        
        var async3 = t.beginAsync()
        var bodyCalled = false
        var beginCount = 0
    
        
        Module("ExtCoreLoader", {
            use : 'http://ajax.googleapis.com/ajax/libs/ext-core/3.0.0/ext-core.js',
            
            BEGIN : function (ready) {
                beginCount++
                
                t.diag("Controllbale ready-ness of Module")
                
                t.ok(!bodyCalled, 'BEGIN called before body')
                
                ready()
            },
            
            body : function () {
                bodyCalled = true
                
                t.diag("Loading from external url")
                
                t.ok(Ext && Ext.util.Observable, "Ext core loaded correctly")
                t.ok(beginCount == 1, "Begin was called only once #1")
                
                t.endAsync(async3)
            }
        })
        
        t.ok(ExtCoreLoader, 'GMapLoader module was created')
        t.ok(ExtCoreLoader.meta.resource.loaded, 'GMapLoader module is considered loaded')
        t.ok(!ExtCoreLoader.meta.resource.loading, 'GMapLoader module is considered not loading')
        t.ok(!ExtCoreLoader.meta.resource.ready, 'GMapLoader module is not ready yet')
    
        //==================================================================================================================================================================================
        //t.diag("Checking repeating calls to BEGIN")
        
        var async31 = t.beginAsync()
        
        use('ExtCoreLoader', function () {
            //==================================================================================================================================================================================
            t.diag("Checking repeating calls to BEGIN")
            
            t.ok(beginCount == 1, "Begin was called only once #2")
            
            t.endAsync(async31)
        })
    
    }, 8)
    
    
    //==================================================================================================================================================================================
    //t.diag("List of searchable paths (@INC)")
    
    var async5 = t.beginAsync()

    Module("Testy", {
        use : 'BasicTest4',
        
        body : function(){
            t.diag("List of searchable paths (@INC)")
            
            t.ok(BasicTest4 && BasicTest4.meta instanceof Joose.Meta.Class, "Class successfully loaded from secondary libroot")
            t.ok(new BasicTest4().result() == 4, "And it work as expected")
            
            t.endAsync(async5)
        }
    })
    
    
    //==================================================================================================================================================================================
    //t.diag("Non-Joose dependency")
    
    var async6 = t.beginAsync()
    
    __global__ = {}
    
    __global__.nonJooseDoubleDeclared = false
    
    
    Module("Testy3", {
        use : 'nonjoose://BasicTest6.js',
        
        body : function(){
            t.diag("Non-Joose dependency")
            
            t.ok(!__global__.nonJooseDoubleDeclared, "Non-Joose dependencies are not loading twicely")
            t.ok(BasicTest6, "Non-Joose dependency was succesfully loaded")
            t.ok(new BasicTest6().result() == 6, "And it work as expected")
            
            Module("Testy4", {
                use : 'nonjoose://BasicTest6.js',
                
                body : function(){
                    t.ok(!__global__.nonJooseDoubleDeclared, "Non-Joose dependencies are not loading twicely #2")
                    
                    t.endAsync(async6)
                }
            })
        }
    })
    
    //==================================================================================================================================================================================
    //t.diag("Dependency from empty class")
    
    var async7 = t.beginAsync()

    Module("Testy4", {
        use : 'BasicTest5',
        
        body : function(){
            t.diag("Dependency from empty class")
            
            t.ok(BasicTest5 && BasicTest5.meta instanceof Joose.Meta.Class, "Empty class successfully loaded")
            
            t.endAsync(async7)
        }
    })
    
    
    //==================================================================================================================================================================================
    //t.diag("Dependency from empty and already loaded class")
    
    var async8 = t.beginAsync()
    
    Class('Empty')
    
    Module("Testy5", {
        use : 'Empty',
        
        body : function(){
            t.diag("Dependency from empty and already loaded class")
            
            t.ok(Testy5 && Testy5.meta instanceof Joose.Meta.Class, "Can depend from empty preloaded class")
            
            t.endAsync(async8)
        }
    })

})