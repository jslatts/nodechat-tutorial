StartTest(function(t) {
    
    use.paths.unshift('localLib/root1', 'localLib/root2')
    
    if (!Joose.is_NodeJS) t.harness.absolutizeINC(use.paths)
    

    //==================================================================================================================================================================================
    t.diag("Dependencies in attribute specification")
    
    var async1 = t.beginAsync()
    
    Class('Test', {
        
        has     : {
            
            attr1 : {
                meta    : 'AttribMeta',
                
                traits  : [ 'AttribTrait1', 'AttribTrait2' ]
            },
            
            
            attr2 : {
                trait   : 'AttribTrait2'
            }
        },
    
        body : function () {
            
            t.ok(Test, '`Test` class has been created')
            t.ok(AttribMeta, '`AttribMeta` class has been loaded')
            t.ok(AttribTrait1, '`AttribTrait1` class has been loaded')
            t.ok(AttribTrait2, '`AttribTrait2` class has been loaded')
            
            var attr1 = Test.meta.getAttribute('attr1')
            var attr2 = Test.meta.getAttribute('attr2')
            
            t.ok(attr1, '`Test` class has `attr1` attribute')
            t.ok(attr2, '`Test` class has `attr2` attribute')
            
            t.isaOk(attr1, AttribMeta, 'Correct meta for `attr1`')
            
            t.ok(attr1.meta.does(AttribTrait1) && attr1.meta.does(AttribTrait2), 'Correct traits for `attr1`')
            
            t.ok(attr1.meta.does(AttribTrait2), 'Correct traits for `attr2`')
            
            t.done()
            
            t.endAsync(async1)
        }
    })
    
    
})