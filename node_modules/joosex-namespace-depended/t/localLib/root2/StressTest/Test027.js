var declared = false
try {
    declared = typeof StressTest.Test027 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test027"


Class('StressTest.Test027', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test032',
           'StressTest.Test037',
           'StressTest.Test043',
           'StressTest.Test049',
           'StressTest.Test050',
           'StressTest.Test057',
           'StressTest.Test066',
           'StressTest.Test069',
           'StressTest.Test075',
           'StressTest.Test081',
           'StressTest.Test085',
           'StressTest.Test086',
           'StressTest.Test090'
    ],
    
    methods : {
        result : function () { return 27 }
    },
    
    body : function(){
            if (typeof StressTest.Test032 != 'function') throw "Dependency StressTest.Test032 is not satisfied for class StressTest.Test027" 
            if (typeof StressTest.Test037 != 'function') throw "Dependency StressTest.Test037 is not satisfied for class StressTest.Test027" 
            if (typeof StressTest.Test043 != 'function') throw "Dependency StressTest.Test043 is not satisfied for class StressTest.Test027" 
            if (typeof StressTest.Test049 != 'function') throw "Dependency StressTest.Test049 is not satisfied for class StressTest.Test027" 
            if (typeof StressTest.Test050 != 'function') throw "Dependency StressTest.Test050 is not satisfied for class StressTest.Test027" 
            if (typeof StressTest.Test057 != 'function') throw "Dependency StressTest.Test057 is not satisfied for class StressTest.Test027" 
            if (typeof StressTest.Test066 != 'function') throw "Dependency StressTest.Test066 is not satisfied for class StressTest.Test027" 
            if (typeof StressTest.Test069 != 'function') throw "Dependency StressTest.Test069 is not satisfied for class StressTest.Test027" 
            if (typeof StressTest.Test075 != 'function') throw "Dependency StressTest.Test075 is not satisfied for class StressTest.Test027" 
            if (typeof StressTest.Test081 != 'function') throw "Dependency StressTest.Test081 is not satisfied for class StressTest.Test027" 
            if (typeof StressTest.Test085 != 'function') throw "Dependency StressTest.Test085 is not satisfied for class StressTest.Test027" 
            if (typeof StressTest.Test086 != 'function') throw "Dependency StressTest.Test086 is not satisfied for class StressTest.Test027" 
            if (typeof StressTest.Test090 != 'function') throw "Dependency StressTest.Test090 is not satisfied for class StressTest.Test027" 
    }
})
