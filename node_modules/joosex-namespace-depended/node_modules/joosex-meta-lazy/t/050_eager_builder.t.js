StartTest(function(t) {
    
	t.plan(5)
	
    //==================================================================================================================================================================================
    t.diag("Sanity")    
    
    t.ok(typeof LazyClass == 'function', "LazyClass helper is here")    
    t.ok(typeof LazyRole == 'function', "LazyRole helper is here")
    

    //==================================================================================================================================================================================
    t.diag("Creation of class with lazy 'my' singleton (should have no effect)")    
    
    LazyClass('SuperClass', {
        
        eager : true,
    	
    	have : {
    		res : 'sup:res'
    	},
    	
    	methods : {
    		process : function () { return 'sup:process' }
    	}
    })    
    t.ok(SuperClass, 'SuperClass class was created')    
    
    t.ok(!SuperClass.meta.pending, 'SuperClass class is eager and not pending')
    
    t.ok(SuperClass.meta.hasAttribute('res') && SuperClass.meta.hasMethod('process'), "SuperClass was constructed correctly")
})    