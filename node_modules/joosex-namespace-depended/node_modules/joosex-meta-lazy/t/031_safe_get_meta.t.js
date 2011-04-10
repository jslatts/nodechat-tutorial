StartTest(function(t) {
	t.plan(9)
	
    //==================================================================================================================================================================================
    t.diag("Lazy meta")    
    
    t.ok(JooseX.Meta.Lazy, "JooseX.Meta.Lazy is here")    
    

    //==================================================================================================================================================================================
    t.diag("Creation")    
    
    
    LazyRole('Resource', {
        
    	have : {
    		res1 : 'role:res'
    	},
    	
    	methods : {
    		process1 : function () { return 'role:process' }
    	}
    })    
    t.ok(Resource, "Role 'Resource' was created")
    
    
    LazyClass('SuperClass', {
        
        does : [ Resource ],
        
        have : {
            res : 'sup:res'
        },
        
        methods : {
            process : function () { return 'sup:process' }
        }
    })    
    t.ok(SuperClass, 'SuperClass class was created')
    
    
    //==================================================================================================================================================================================
    t.diag("Pending state")    
    
    t.ok(Resource.meta.pending, "'Resource' is pending construction")
    t.ok(SuperClass.meta.pending, "'SuperClass' is pending construction")
    
    
    //==================================================================================================================================================================================
    t.diag("Constructing on 'getMeta()")    
    
    var meta = SuperClass.$meta()

    
    t.ok(!Resource.meta.pending, "'Resource' is not pending construction")
    t.ok(!SuperClass.meta.pending, "'SuperClass' is not pending construction")
    
    t.ok(meta.hasAttribute('res') && meta.hasMethod('process'), "SuperClass was correctly constructed")    
    t.ok(Resource.meta.hasAttribute('res1') && Resource.meta.hasMethod('process1'), "Resource was correctly constructed")    
})    