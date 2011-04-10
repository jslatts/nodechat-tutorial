StartTest(function(t) {
	t.plan(7)
	
    //==================================================================================================================================================================================
    t.diag("Lazy meta")    
    
    t.ok(JooseX.Meta.Lazy, "JooseX.Meta.Lazy is here")    
    

    //==================================================================================================================================================================================
    t.diag("Creation")    
    
    LazyClass('SuperClass', {
    	
    	have : {
    		res : 'sup:res'
    	},
    	
    	methods : {
    		process : function () { return 'sup:process' }
    	}
    })    
    t.ok(SuperClass, 'SuperClass class was created')    

    
    
    LazyRole('Resource', {
    	
    	have : {
    		res1 : 'role:res'
    	},
    	
    	methods : {
    		process1 : function () { return 'role:process' }
    	}
    })    
    t.ok(Resource, "Role 'Resource' was created")

    
    //==================================================================================================================================================================================
    t.diag("Constructing on extend")    
    
    SuperClass.meta.extend({
        does : [ Resource ]
    })
    
    
    t.ok(SuperClass.meta.hasAttribute('res') && SuperClass.meta.hasMethod('process'), "SuperClass was correctly constructed")    
    t.ok(Resource.meta.hasAttribute('res1') && Resource.meta.hasMethod('process1'), "Resource was correctly constructed")    
    
    var superclass = new SuperClass()
    
    t.ok(SuperClass.meta.hasAttribute('res1') && superclass.res1 == 'role:res', "SuperClass was correctly extended #1")    
    t.ok(SuperClass.meta.hasMethod('process1') && superclass.process1() == 'role:process', "SuperClass was correctly constructed #2")    
})    