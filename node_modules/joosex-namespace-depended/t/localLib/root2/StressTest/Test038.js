var declared = false
try {
    declared = typeof StressTest.Test038 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test038"


Class('StressTest.Test038', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test039',
           'StressTest.Test050',
           'StressTest.Test056',
           'StressTest.Test061',
           'StressTest.Test065',
           'StressTest.Test067',
           'StressTest.Test077',
           'StressTest.Test080',
           'StressTest.Test081',
           'StressTest.Test082',
           'StressTest.Test084',
           'StressTest.Test088',
           'StressTest.Test093'
    ],
    
    methods : {
        result : function () { return 38 }
    },
    
    body : function(){
            if (typeof StressTest.Test039 != 'function') throw "Dependency StressTest.Test039 is not satisfied for class StressTest.Test038" 
            if (typeof StressTest.Test050 != 'function') throw "Dependency StressTest.Test050 is not satisfied for class StressTest.Test038" 
            if (typeof StressTest.Test056 != 'function') throw "Dependency StressTest.Test056 is not satisfied for class StressTest.Test038" 
            if (typeof StressTest.Test061 != 'function') throw "Dependency StressTest.Test061 is not satisfied for class StressTest.Test038" 
            if (typeof StressTest.Test065 != 'function') throw "Dependency StressTest.Test065 is not satisfied for class StressTest.Test038" 
            if (typeof StressTest.Test067 != 'function') throw "Dependency StressTest.Test067 is not satisfied for class StressTest.Test038" 
            if (typeof StressTest.Test077 != 'function') throw "Dependency StressTest.Test077 is not satisfied for class StressTest.Test038" 
            if (typeof StressTest.Test080 != 'function') throw "Dependency StressTest.Test080 is not satisfied for class StressTest.Test038" 
            if (typeof StressTest.Test081 != 'function') throw "Dependency StressTest.Test081 is not satisfied for class StressTest.Test038" 
            if (typeof StressTest.Test082 != 'function') throw "Dependency StressTest.Test082 is not satisfied for class StressTest.Test038" 
            if (typeof StressTest.Test084 != 'function') throw "Dependency StressTest.Test084 is not satisfied for class StressTest.Test038" 
            if (typeof StressTest.Test088 != 'function') throw "Dependency StressTest.Test088 is not satisfied for class StressTest.Test038" 
            if (typeof StressTest.Test093 != 'function') throw "Dependency StressTest.Test093 is not satisfied for class StressTest.Test038" 
    }
})
