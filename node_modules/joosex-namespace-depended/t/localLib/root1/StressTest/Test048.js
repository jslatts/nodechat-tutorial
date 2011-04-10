var declared = false
try {
    declared = typeof StressTest.Test048 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test048"


Class('StressTest.Test048', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test051',
           'StressTest.Test053',
           'StressTest.Test058',
           'StressTest.Test063',
           'StressTest.Test065',
           'StressTest.Test074',
           'StressTest.Test076',
           'StressTest.Test082',
           'StressTest.Test084',
           'StressTest.Test090',
           'StressTest.Test091',
           'StressTest.Test095'
    ],
    
    methods : {
        result : function () { return 48 }
    },
    
    body : function(){
            if (typeof StressTest.Test051 != 'function') throw "Dependency StressTest.Test051 is not satisfied for class StressTest.Test048" 
            if (typeof StressTest.Test053 != 'function') throw "Dependency StressTest.Test053 is not satisfied for class StressTest.Test048" 
            if (typeof StressTest.Test058 != 'function') throw "Dependency StressTest.Test058 is not satisfied for class StressTest.Test048" 
            if (typeof StressTest.Test063 != 'function') throw "Dependency StressTest.Test063 is not satisfied for class StressTest.Test048" 
            if (typeof StressTest.Test065 != 'function') throw "Dependency StressTest.Test065 is not satisfied for class StressTest.Test048" 
            if (typeof StressTest.Test074 != 'function') throw "Dependency StressTest.Test074 is not satisfied for class StressTest.Test048" 
            if (typeof StressTest.Test076 != 'function') throw "Dependency StressTest.Test076 is not satisfied for class StressTest.Test048" 
            if (typeof StressTest.Test082 != 'function') throw "Dependency StressTest.Test082 is not satisfied for class StressTest.Test048" 
            if (typeof StressTest.Test084 != 'function') throw "Dependency StressTest.Test084 is not satisfied for class StressTest.Test048" 
            if (typeof StressTest.Test090 != 'function') throw "Dependency StressTest.Test090 is not satisfied for class StressTest.Test048" 
            if (typeof StressTest.Test091 != 'function') throw "Dependency StressTest.Test091 is not satisfied for class StressTest.Test048" 
            if (typeof StressTest.Test095 != 'function') throw "Dependency StressTest.Test095 is not satisfied for class StressTest.Test048" 
    }
})
