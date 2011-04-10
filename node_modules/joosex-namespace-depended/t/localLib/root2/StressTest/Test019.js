var declared = false
try {
    declared = typeof StressTest.Test019 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test019"


Class('StressTest.Test019', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test029',
           'StressTest.Test041',
           'StressTest.Test042',
           'StressTest.Test043',
           'StressTest.Test050',
           'StressTest.Test052',
           'StressTest.Test068',
           'StressTest.Test073',
           'StressTest.Test077',
           'StressTest.Test091',
           'StressTest.Test094'
    ],
    
    methods : {
        result : function () { return 19 }
    },
    
    body : function(){
            if (typeof StressTest.Test029 != 'function') throw "Dependency StressTest.Test029 is not satisfied for class StressTest.Test019" 
            if (typeof StressTest.Test041 != 'function') throw "Dependency StressTest.Test041 is not satisfied for class StressTest.Test019" 
            if (typeof StressTest.Test042 != 'function') throw "Dependency StressTest.Test042 is not satisfied for class StressTest.Test019" 
            if (typeof StressTest.Test043 != 'function') throw "Dependency StressTest.Test043 is not satisfied for class StressTest.Test019" 
            if (typeof StressTest.Test050 != 'function') throw "Dependency StressTest.Test050 is not satisfied for class StressTest.Test019" 
            if (typeof StressTest.Test052 != 'function') throw "Dependency StressTest.Test052 is not satisfied for class StressTest.Test019" 
            if (typeof StressTest.Test068 != 'function') throw "Dependency StressTest.Test068 is not satisfied for class StressTest.Test019" 
            if (typeof StressTest.Test073 != 'function') throw "Dependency StressTest.Test073 is not satisfied for class StressTest.Test019" 
            if (typeof StressTest.Test077 != 'function') throw "Dependency StressTest.Test077 is not satisfied for class StressTest.Test019" 
            if (typeof StressTest.Test091 != 'function') throw "Dependency StressTest.Test091 is not satisfied for class StressTest.Test019" 
            if (typeof StressTest.Test094 != 'function') throw "Dependency StressTest.Test094 is not satisfied for class StressTest.Test019" 
    }
})
