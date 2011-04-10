StartTest(function(t) {

    use.paths.unshift('localLib/root3/lib')
    
    if (!Joose.is_NodeJS) t.harness.absolutizeINC(use.paths)
    
    
    t.plan(2)

    
    var async1 = t.beginAsync()

    
    use([ 'Symbie.Meta.Route.Token.Parameter', 'Symbie.Meta.Route.Token.String' ], function () {
        
        //===========================================================================================================================================================================================================
        t.diag('Dependency from class which is located previously on in namespace chain')
        
        t.ok(Symbie.Meta.Route.Token.Parameter, 'Symbie.Meta.Route.Token.Parameter is here')
        t.ok(Symbie.Meta.Route.Token.String, 'Symbie.Meta.Route.Token.String is here')
        
        t.endAsync(async1)
    })
    
})