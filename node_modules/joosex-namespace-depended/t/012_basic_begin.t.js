StartTest(function(t) {
    
    use.paths.unshift('localLib/root1', 'localLib/root2')
    
    if (!Joose.is_NodeJS) t.harness.absolutizeINC(use.paths)
    
    t.plan(3)
    
    var async1 = t.beginAsync()

    
    use('Request.flXHR', function () {
        
        //===========================================================================================================================================================================================================
        t.diag('Sanity')
        
        t.ok(Request.flXHR, 'Request.flXHR is here')
        
        var resource = Request.flXHR.meta.resource
        
        t.ok(resource.beginCount == 1, 'BEGIN of Request.flXHR was called only once #1')
        
        
        setTimeout(function () {
            
            t.ok(resource.beginCount == 1, 'BEGIN of Request.flXHR was called only once #2')
            
            t.endAsync(async1)
        }, 500)
        
        
    })    
    
})    