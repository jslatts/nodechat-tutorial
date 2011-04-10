StartTest(function(t) {

    use.paths.unshift('localLib/root1', 'localLib/root2')
    
    if (!Joose.is_NodeJS) t.harness.absolutizeINC(use.paths)
    
    
    t.plan(1)

    
    var async1 = t.beginAsync()

    
    use([ 'Ensovis.Adapter' ], function () {
        
        //===========================================================================================================================================================================================================
        //t.diag('RemoteClass creation')
        
        Class('Simple', {
            
            use : 'Ensovis.Adapter.RemoteMethod.Add',
            
            body : function () {
                //===========================================================================================================================================================================================================
                t.diag('Additional dependencies')
                
                t.ok(Ensovis.Adapter.RemoteMethod.Add, 'Ensovis.Adapter.RemoteMethod.Add is here')
                
                t.endAsync(async1)
            }
        })
    })
})