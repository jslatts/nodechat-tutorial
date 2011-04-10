var declared = false
try {
    declared = typeof StressTest.Test058 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test058"


Class('StressTest.Test058', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test062',
           'StressTest.Test063',
           'StressTest.Test068',
           'StressTest.Test070',
           'StressTest.Test071',
           'StressTest.Test078',
           'StressTest.Test079',
           'StressTest.Test081',
           'StressTest.Test082',
           'StressTest.Test087',
           'StressTest.Test091',
           'StressTest.Test098'
    ],
    
    methods : {
        result : function () { return 58 }
    },
    
    body : function(){
            if (typeof StressTest.Test062 != 'function') throw "Dependency StressTest.Test062 is not satisfied for class StressTest.Test058" 
            if (typeof StressTest.Test063 != 'function') throw "Dependency StressTest.Test063 is not satisfied for class StressTest.Test058" 
            if (typeof StressTest.Test068 != 'function') throw "Dependency StressTest.Test068 is not satisfied for class StressTest.Test058" 
            if (typeof StressTest.Test070 != 'function') throw "Dependency StressTest.Test070 is not satisfied for class StressTest.Test058" 
            if (typeof StressTest.Test071 != 'function') throw "Dependency StressTest.Test071 is not satisfied for class StressTest.Test058" 
            if (typeof StressTest.Test078 != 'function') throw "Dependency StressTest.Test078 is not satisfied for class StressTest.Test058" 
            if (typeof StressTest.Test079 != 'function') throw "Dependency StressTest.Test079 is not satisfied for class StressTest.Test058" 
            if (typeof StressTest.Test081 != 'function') throw "Dependency StressTest.Test081 is not satisfied for class StressTest.Test058" 
            if (typeof StressTest.Test082 != 'function') throw "Dependency StressTest.Test082 is not satisfied for class StressTest.Test058" 
            if (typeof StressTest.Test087 != 'function') throw "Dependency StressTest.Test087 is not satisfied for class StressTest.Test058" 
            if (typeof StressTest.Test091 != 'function') throw "Dependency StressTest.Test091 is not satisfied for class StressTest.Test058" 
            if (typeof StressTest.Test098 != 'function') throw "Dependency StressTest.Test098 is not satisfied for class StressTest.Test058" 
    }
})
