var declared = false
try {
    declared = typeof StressTest.Test045 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test045"


Class('StressTest.Test045', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test046',
           'StressTest.Test049',
           'StressTest.Test050',
           'StressTest.Test054',
           'StressTest.Test062',
           'StressTest.Test085',
           'StressTest.Test091',
           'StressTest.Test095',
           'StressTest.Test097',
           'StressTest.Test098'
    ],
    
    methods : {
        result : function () { return 45 }
    },
    
    body : function(){
            if (typeof StressTest.Test046 != 'function') throw "Dependency StressTest.Test046 is not satisfied for class StressTest.Test045" 
            if (typeof StressTest.Test049 != 'function') throw "Dependency StressTest.Test049 is not satisfied for class StressTest.Test045" 
            if (typeof StressTest.Test050 != 'function') throw "Dependency StressTest.Test050 is not satisfied for class StressTest.Test045" 
            if (typeof StressTest.Test054 != 'function') throw "Dependency StressTest.Test054 is not satisfied for class StressTest.Test045" 
            if (typeof StressTest.Test062 != 'function') throw "Dependency StressTest.Test062 is not satisfied for class StressTest.Test045" 
            if (typeof StressTest.Test085 != 'function') throw "Dependency StressTest.Test085 is not satisfied for class StressTest.Test045" 
            if (typeof StressTest.Test091 != 'function') throw "Dependency StressTest.Test091 is not satisfied for class StressTest.Test045" 
            if (typeof StressTest.Test095 != 'function') throw "Dependency StressTest.Test095 is not satisfied for class StressTest.Test045" 
            if (typeof StressTest.Test097 != 'function') throw "Dependency StressTest.Test097 is not satisfied for class StressTest.Test045" 
            if (typeof StressTest.Test098 != 'function') throw "Dependency StressTest.Test098 is not satisfied for class StressTest.Test045" 
    }
})
