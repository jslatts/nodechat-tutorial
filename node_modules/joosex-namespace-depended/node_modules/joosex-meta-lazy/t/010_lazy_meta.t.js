StartTest(function(t) {
	
    t.plan(19)
	
    //==================================================================================================================================================================================
    t.diag("Sanity")    
    
    t.ok(JooseX.Meta.Lazy, "JooseX.Meta.Lazy is here")    
    t.ok(JooseX.Meta.Lazy.Class, "JooseX.Meta.Lazy.Class is here")
    t.ok(JooseX.Meta.Lazy.Role, "JooseX.Meta.Lazy.Role is here")
    t.ok(LazyClass && LazyRole, "LazyClass && LazyRole helpers were created")


    //==================================================================================================================================================================================
    t.diag("Creation")    
    
    Class('SuperClass', {
    	trait : JooseX.Meta.Lazy,
    	
    	have : {
    		res : 'sup:res'
    	},
    	
    	methods : {
    		process : function () { return 'sup:process' }
    	}
    })    
    t.ok(SuperClass, 'SuperClass class was created')    

    
    Role('Resource', {
    	trait : JooseX.Meta.Lazy,
    	
    	have : {
    		res : 'role:res'
    	},
    	
    	methods : {
    		process : function () { return 'role:process' }
    	}
    })    
    t.ok(Resource, "Role 'Resource' was created")    


    //will inherit the same meta
    Class('SubClass', {
    	isa : SuperClass,
    	
    	does : [ Resource ]
    })    
    t.ok(SubClass, 'SubClass class was created')    

    

    //==================================================================================================================================================================================
    t.diag("Under construction state")    
    
    t.throws_ok(function() {
        SuperClass.meta.hasAttribute('res')    
    }, "", "'SuperClass even have no stem yet")

    
    t.throws_ok(function() {
        Resource.meta.hasAttribute('res')    
    }, "", "'Resource even have no stem yet")
    
    
    t.ok(Resource.meta.pending, "'Resource' is pending construction")
    t.ok(SuperClass.meta.pending, "'SuperClass' is pending construction")
    t.ok(SubClass.meta.pending, "'SubClass' is pending construction")
    
    
    //==================================================================================================================================================================================
    t.diag("Lazy construction")
    
    var subclass = new SubClass()    
    
    t.ok(!Resource.meta.pending, "'Resource' was constructed")
    t.ok(!SuperClass.meta.pending, "'SuperClass' was constructed")
    t.ok(!SubClass.meta.pending, "'SubClass' was constructed")
    
    
    t.ok(SuperClass.meta.hasAttribute('res') && SuperClass.meta.hasMethod('process'), "SuperClass was correctly constructed")    
    t.ok(Resource.meta.hasAttribute('res') && Resource.meta.hasMethod('process'), "Resource was correctly constructed")    
    
    t.ok(SubClass.meta.hasAttribute('res') && subclass.res == 'role:res', "SubClass was correctly constructed #1")    
    t.ok(SubClass.meta.hasMethod('process') && subclass.process() == 'role:process', "SubClass was correctly constructed #2")
    
})    