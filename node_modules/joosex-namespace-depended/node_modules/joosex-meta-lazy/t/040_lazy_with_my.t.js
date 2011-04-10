StartTest(function(t) {
    
	t.plan(8)
	
    //==================================================================================================================================================================================
    t.diag("Sanity")    
    
    t.ok(typeof LazyClass == 'function', "LazyClass helper is here")    
    t.ok(typeof LazyRole == 'function', "LazyRole helper is here")
    

    //==================================================================================================================================================================================
    t.diag("Creation of class with lazy 'my' singleton (should have no effect)")    
    
    LazyClass('SuperClass', {
    	
    	have : {
    		res : 'sup:res'
    	},
    	
    	methods : {
    		process : function () { return 'sup:process' }
    	}
    })    
    t.ok(SuperClass, 'SuperClass class was created')    

    
    Class('ClassWithLazyMy', {
        
        my : {
            isa : SuperClass
        }
    })    
    t.ok(ClassWithLazyMy, 'ClassWithLazyMy class was created')    
    
    
    var my = ClassWithLazyMy.my

    t.ok(my, '.. and it has a singleton')

    
    t.ok(my.meta.hasAttribute('res') && my.meta.hasMethod('process'), "Singleton was constructed correctly #1")    
    
    t.ok(my.res == 'sup:res', "Singleton was constructed correctly #2")    
    t.ok(my.process() == 'sup:process', "Singleton was constructed correctly #3")    
})    