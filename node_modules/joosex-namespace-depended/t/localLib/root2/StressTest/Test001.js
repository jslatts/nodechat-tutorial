var declared = false
try {
    declared = typeof StressTest.Test001 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test001"


Class('StressTest.Test001', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test004',
           'StressTest.Test027',
           'StressTest.Test028',
           'StressTest.Test032',
           'StressTest.Test041',
           'StressTest.Test046',
           'StressTest.Test055',
           'StressTest.Test062',
           'StressTest.Test089',
           'StressTest.Test097'
    ],
    
    methods : {
        result : function () { return 1 }
    },
    
    body : function(){
            if (typeof StressTest.Test004 != 'function') throw "Dependency StressTest.Test004 is not satisfied for class StressTest.Test001" 
            if (typeof StressTest.Test027 != 'function') throw "Dependency StressTest.Test027 is not satisfied for class StressTest.Test001" 
            if (typeof StressTest.Test028 != 'function') throw "Dependency StressTest.Test028 is not satisfied for class StressTest.Test001" 
            if (typeof StressTest.Test032 != 'function') throw "Dependency StressTest.Test032 is not satisfied for class StressTest.Test001" 
            if (typeof StressTest.Test041 != 'function') throw "Dependency StressTest.Test041 is not satisfied for class StressTest.Test001" 
            if (typeof StressTest.Test046 != 'function') throw "Dependency StressTest.Test046 is not satisfied for class StressTest.Test001" 
            if (typeof StressTest.Test055 != 'function') throw "Dependency StressTest.Test055 is not satisfied for class StressTest.Test001" 
            if (typeof StressTest.Test062 != 'function') throw "Dependency StressTest.Test062 is not satisfied for class StressTest.Test001" 
            if (typeof StressTest.Test089 != 'function') throw "Dependency StressTest.Test089 is not satisfied for class StressTest.Test001" 
            if (typeof StressTest.Test097 != 'function') throw "Dependency StressTest.Test097 is not satisfied for class StressTest.Test001" 
    }
})
