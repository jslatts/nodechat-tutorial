var declared = false
try {
    declared = typeof StressTest.Test036 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test036"


Class('StressTest.Test036', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test037',
           'StressTest.Test046',
           'StressTest.Test049',
           'StressTest.Test055',
           'StressTest.Test062',
           'StressTest.Test063',
           'StressTest.Test068',
           'StressTest.Test072',
           'StressTest.Test082',
           'StressTest.Test088',
           'StressTest.Test089'
    ],
    
    methods : {
        result : function () { return 36 }
    },
    
    body : function(){
            if (typeof StressTest.Test037 != 'function') throw "Dependency StressTest.Test037 is not satisfied for class StressTest.Test036" 
            if (typeof StressTest.Test046 != 'function') throw "Dependency StressTest.Test046 is not satisfied for class StressTest.Test036" 
            if (typeof StressTest.Test049 != 'function') throw "Dependency StressTest.Test049 is not satisfied for class StressTest.Test036" 
            if (typeof StressTest.Test055 != 'function') throw "Dependency StressTest.Test055 is not satisfied for class StressTest.Test036" 
            if (typeof StressTest.Test062 != 'function') throw "Dependency StressTest.Test062 is not satisfied for class StressTest.Test036" 
            if (typeof StressTest.Test063 != 'function') throw "Dependency StressTest.Test063 is not satisfied for class StressTest.Test036" 
            if (typeof StressTest.Test068 != 'function') throw "Dependency StressTest.Test068 is not satisfied for class StressTest.Test036" 
            if (typeof StressTest.Test072 != 'function') throw "Dependency StressTest.Test072 is not satisfied for class StressTest.Test036" 
            if (typeof StressTest.Test082 != 'function') throw "Dependency StressTest.Test082 is not satisfied for class StressTest.Test036" 
            if (typeof StressTest.Test088 != 'function') throw "Dependency StressTest.Test088 is not satisfied for class StressTest.Test036" 
            if (typeof StressTest.Test089 != 'function') throw "Dependency StressTest.Test089 is not satisfied for class StressTest.Test036" 
    }
})
