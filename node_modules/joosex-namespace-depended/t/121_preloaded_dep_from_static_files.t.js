StartTest(function(t) {
    
    //==================================================================================================================================================================================
    t.diag("Testing of loading from static files")
    
    some_raw_dep = 'some_raw_dep'
    
    var async1 = t.beginAsync()
    
    use(
        { 
            type : 'javascript', 
            token : 'JooseX/Namespace/Depended/static/dep/some_raw_dep.js',
            presence : 'some_raw_dep'
        }, 
        
        function() {
        
            t.ok(typeof some_raw_dep == 'string', 'Used preload dependency, no load attempt')
            
            t.endAsync(async1)
            
            t.done()
        }
    )
    
})

