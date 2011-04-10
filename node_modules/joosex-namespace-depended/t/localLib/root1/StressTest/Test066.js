var declared = false
try {
    declared = typeof StressTest.Test066 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test066"


Class('StressTest.Test066', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test068',
           'StressTest.Test073',
           'StressTest.Test081',
           'StressTest.Test086',
           'StressTest.Test087',
           'StressTest.Test096'
    ],
    
    methods : {
        result : function () { return 66 }
    },
    
    body : function(){
            if (typeof StressTest.Test068 != 'function') throw "Dependency StressTest.Test068 is not satisfied for class StressTest.Test066" 
            if (typeof StressTest.Test073 != 'function') throw "Dependency StressTest.Test073 is not satisfied for class StressTest.Test066" 
            if (typeof StressTest.Test081 != 'function') throw "Dependency StressTest.Test081 is not satisfied for class StressTest.Test066" 
            if (typeof StressTest.Test086 != 'function') throw "Dependency StressTest.Test086 is not satisfied for class StressTest.Test066" 
            if (typeof StressTest.Test087 != 'function') throw "Dependency StressTest.Test087 is not satisfied for class StressTest.Test066" 
            if (typeof StressTest.Test096 != 'function') throw "Dependency StressTest.Test096 is not satisfied for class StressTest.Test066" 
    }
})
