StartTest(function(t) {
    
    use.paths.unshift('localLib/root1', 'localLib/root2')
    
    if (!Joose.is_NodeJS) t.harness.absolutizeINC(use.paths)

    
    t.plan(7)
    
    //==================================================================================================================================================================================
    //t.diag("Dependency in 'meta'")
    
    var async0 = t.beginAsync()
    
    Class('TestClass', {
        
        meta : 'BasicMetaClass',
        
        isa : 'BasicTest2',
        
        sugar : '',
        
        body : function (Basic0) {
            //==================================================================================================================================================================================
            t.diag("Dependency in 'meta'")
            
            t.ok(BasicMetaClass, 'BasicMetaClass was loaded')
            t.ok(BasicTest2, 'BasicTest2 was loaded')
            
            t.ok(TestClass.meta.constructor == BasicMetaClass, 'Correct metaclass was used for TestClass')
            
            t.ok(TestClass.meta.hasAttribute('sugar'), "'TestClass' has 'sugar' attribute, received via builder from metaclass")
            t.ok(new TestClass().sugar == 'sweet', "'sugar' attribute has correct initial value #1")
            
            
            //==================================================================================================================================================================================
            t.diag("'meta' inheritance")
            
            
            Class('TestClass2', {
                isa : TestClass,
                
                sugar : ''
            })
            
            t.ok(TestClass.TestClass2.meta.hasAttribute('sugar'), "'TestClass.TestClass2' has 'sugar' builder, inherited from superclass")
            t.ok(new TestClass.TestClass2().sugar == 'sweet', "'sugar' attribute has correct initial value #2")
            
            t.endAsync(async0)
        }
    })
    
})