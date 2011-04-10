StartTest(function(t) {
    
    use.paths.unshift('localLib/root1', 'localLib/root2')
    
    if (!Joose.is_NodeJS) t.harness.absolutizeINC(use.paths)

    
    t.plan(10)
    
    //==================================================================================================================================================================================
    t.diag("Synchronous creation of anonymous classes without dependencies")

    
    var testClass = Class({
        
        has : {
            attr : 'value'
        },
        
        methods : {
            result : function () {
                return 'result'
            }
        }
    })
    
    t.ok(testClass, 'Something was returned as constructor, synchronously')
    t.ok(testClass.meta instanceof Joose.Meta.Class, 'And its an anonymous class')
    
    
    var obj = new testClass()
    
    t.ok(obj.attr == 'value', 'Attribute is correct')
    t.ok(obj.result() == 'result', '.. and method also')
    

    //==================================================================================================================================================================================
    t.diag("Creation of anonymous classes with dependencies (via 'use')")
    
    
    var async1 = t.beginAsync()
    
    use([ 'BasicTest1' ], function () {
    
        t.ok(BasicTest1, 'BasicTest1 was loaded')
        t.ok(BasicTest2, 'BasicTest2 was loaded')
        
        var syncSemaphore1 = false
        
        use('BasicTest1', function () {
            
            syncSemaphore1 = true
            
            t.pass('Dependency from already loaded classes works #1')
        })
        
        t.ok(syncSemaphore1, 'And its synchronous #1')
        
        BasicTest6          = true
        var syncSemaphore2  = false
        
        use('nonjoose://BasicTest6', function () {
            
            syncSemaphore2 = true
            
            t.pass('Dependency from already loaded classes works #2')
        })
        
        
        t.ok(syncSemaphore2, 'And its synchronous #2')
        
        t.endAsync(async1)
    })
    
    
})