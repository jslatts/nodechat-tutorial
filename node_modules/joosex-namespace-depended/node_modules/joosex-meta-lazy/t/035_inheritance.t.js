StartTest(function(t) {
    
	t.plan(10)
	
    //==================================================================================================================================================================================
    t.diag("Sanity")    
    
    t.ok(typeof LazyClass == 'function', "LazyClass helper is here")    
    t.ok(typeof LazyRole == 'function', "LazyRole helper is here")
    

    //==================================================================================================================================================================================
    t.diag("Inheritance from 'lazy' class for usual classes")    
    
    LazyClass('SuperClass', {
    	
    	have : {
    		res : 'sup:res'
    	},
    	
    	methods : {
    		process : function () { return 'sup:process' }
    	}
    })    
    t.ok(SuperClass, 'SuperClass class was created')
    
    t.ok(SuperClass.meta.pending, 'SuperClass class is pending construction')

    
    
    Class('Subclass', {
        
        meta : Joose.Meta.Class,
        
        isa : SuperClass
    })    
    t.ok(Subclass, 'Subclass class was created')    
    
    
    t.ok(!SuperClass.meta.pending, 'SuperClass class was constructed to create a not lazy subclass')
    
    
    
    t.ok(Subclass.meta.hasAttribute('res') && Subclass.meta.hasMethod('process'), "Subclass was constructed correctly #1")
    
    
    var subclass = new Subclass()

    t.ok(subclass, 'Instance of usual class was created')

    
    t.ok(subclass.res == 'sup:res', "Subclass was constructed correctly #2")    
    t.ok(subclass.process() == 'sup:process', "Subclass was constructed correctly #3")    
})    