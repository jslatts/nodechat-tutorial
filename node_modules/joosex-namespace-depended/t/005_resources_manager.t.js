StartTest(function(t) {
    
    //==================================================================================================================================================================================
    t.diag("Sanity")
    
    t.ok(JooseX.Namespace.Depended.Manager, 'JooseX.Namespace.Depended.Manager is here')
    
    t.ok(JooseX.Namespace.Depended.Resource, 'JooseX.Namespace.Depended.Resource is here')
    t.ok(JooseX.Namespace.Depended.Resource.JooseClass, 'JooseX.Namespace.Depended.Resource.JooseClass is here')
    t.ok(JooseX.Namespace.Depended.Resource.JavaScript, 'JooseX.Namespace.Depended.Resource.JavaScript is here')
    
    t.skipIf(Joose.is_NodeJS, "Not included in NodeJS bundle", function (){
        
        t.ok(JooseX.Namespace.Depended.Transport.XHRAsync, 'JooseX.Namespace.Depended.Transport.XHRAsync is here')
        t.ok(JooseX.Namespace.Depended.Transport.ScriptTag, 'JooseX.Namespace.Depended.Transport.ScriptTag is here')
    }, 1)
    
    t.ok(JooseX.Namespace.Depended.Materialize.Eval, 'JooseX.Namespace.Depended.Materialize.Eval is here')
    
    t.ok(JooseX.Namespace.Depended, 'JooseX.Namespace.Depended is here')
    
    
    t.ok(Joose.Namespace.Manager.meta.does(JooseX.Namespace.Depended), 'Joose.Namespace.Manager does JooseX.Namespace.Depended')
    
    
    //==================================================================================================================================================================================
    t.diag("Resource's pool")
    
    var testClassRes1 = JooseX.Namespace.Depended.Manager.my.getResource('TestClass')
    var testClassRes2 = JooseX.Namespace.Depended.Manager.my.getResource('joose://TestClass')
    
    t.ok(testClassRes1 === testClassRes2, "Default resource type is 'joose', resources pool works")

    
    //==================================================================================================================================================================================
    t.diag("JS resources with versions")
    
    testClassRes1.addDescriptor({ 
        'Test1' : 0.01, 
        'Test2' : 0.02
    })
    
    var testRes1 = testClassRes1.dependencies['joose://Test1']
    t.ok(testRes1, 'Resource for Test1 was created')
    t.ok(testRes1.requiredVersion == 0.01, '.. and it has correct version')
    t.ok(testRes1.id == 'joose://Test1', '.. and it has correct id')
    t.ok(testRes1.type == 'joose', '.. and it has correct type')
    
    var testRes2 = testClassRes2.dependencies['joose://Test2']
    t.ok(testRes2, 'Resource for Test2 was created')
    t.ok(testRes2.requiredVersion == 0.02, '.. and it has correct version')
    t.ok(testRes2.id == 'joose://Test2', '.. and it has correct id')
    t.ok(testRes2.type == 'joose', '.. and it has correct type')
    
    t.done()
    
//    var res2 = JooseX.Namespace.Depended.Manager.my.getResource({ 'TestClass' : 0.01 })
//    var res1 = JooseX.Namespace.Depended.Manager.my.getResource('joose://TestClass#0.01')
//    
//    var res3 = JooseX.Namespace.Depended.Manager.my.getResource({ 
//        type : 'ext',
//        token : 'TestClass.Yo.Yo',
//        presence : function () { return TestClass.Yo.Yo},    
//    })
//    
//    var res4 = JooseX.Namespace.Depended.Manager.my.getResource({ 
//        type : 'url',
//        name : 'urljoose://http://google.com/gmap/yo.js' 
//    })
//    
//    var res5 = JooseX.Namespace.Depended.Manager.my.getResource({ 
//        type : 'css',
//        name : 'css:///inc/Test/Run/static/css/all.css' 
//    })
//    
//    var res6 = JooseX.Namespace.Depended.Manager.my.getResource({ 
//        type : 'img',
//        name : 'img:///inc/Test/Run/static/img/ok.jpg' 
//    })
})