StartTest(function(t) {
    
    use.paths.unshift('localLib/root1', 'localLib/root2')
    
    if (!Joose.is_NodeJS) t.harness.absolutizeINC(use.paths)
    
//    JooseX.Namespace.Depended.Manager.my.disableCaching = false
    
    t.plan(8)
    
    //==================================================================================================================================================================================
    t.diag("Dependency from the class earlier on the same namespace chain")
    
    var async1 = t.beginAsync()
    
    use('Chain1.Middle.Chain2', function () {
        
        t.ok(Chain1, "Something in the Chain1 slot")
        t.ok(Chain1.meta.constructor == Joose.Meta.Class, ".. and its a class")
        t.ok(!Chain1.meta.stem.opened, ".. with closed stem")
        t.ok(new Chain1().result() == 1, ".. and correct 'result' method")
        
        t.ok(Chain1.Middle.Chain2, "Something in the Chain1.Middle.Chain2 slot")
        t.ok(Chain1.Middle.Chain2.meta.constructor == Joose.Meta.Class, ".. and its a class")
        t.ok(!Chain1.Middle.Chain2.meta.stem.opened, ".. with closed stem")
        t.ok(new Chain1.Middle.Chain2().result() == 2, ".. and correct 'result' method")
        
        t.endAsync(async1)
    })
    
})