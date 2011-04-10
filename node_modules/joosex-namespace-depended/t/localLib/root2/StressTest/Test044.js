var declared = false
try {
    declared = typeof StressTest.Test044 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test044"


Class('StressTest.Test044', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test047',
           'StressTest.Test054',
           'StressTest.Test062',
           'StressTest.Test068',
           'StressTest.Test070',
           'StressTest.Test075',
           'StressTest.Test077',
           'StressTest.Test080',
           'StressTest.Test081',
           'StressTest.Test089',
           'StressTest.Test092',
           'StressTest.Test093'
    ],
    
    methods : {
        result : function () { return 44 }
    },
    
    body : function(){
            if (typeof StressTest.Test047 != 'function') throw "Dependency StressTest.Test047 is not satisfied for class StressTest.Test044" 
            if (typeof StressTest.Test054 != 'function') throw "Dependency StressTest.Test054 is not satisfied for class StressTest.Test044" 
            if (typeof StressTest.Test062 != 'function') throw "Dependency StressTest.Test062 is not satisfied for class StressTest.Test044" 
            if (typeof StressTest.Test068 != 'function') throw "Dependency StressTest.Test068 is not satisfied for class StressTest.Test044" 
            if (typeof StressTest.Test070 != 'function') throw "Dependency StressTest.Test070 is not satisfied for class StressTest.Test044" 
            if (typeof StressTest.Test075 != 'function') throw "Dependency StressTest.Test075 is not satisfied for class StressTest.Test044" 
            if (typeof StressTest.Test077 != 'function') throw "Dependency StressTest.Test077 is not satisfied for class StressTest.Test044" 
            if (typeof StressTest.Test080 != 'function') throw "Dependency StressTest.Test080 is not satisfied for class StressTest.Test044" 
            if (typeof StressTest.Test081 != 'function') throw "Dependency StressTest.Test081 is not satisfied for class StressTest.Test044" 
            if (typeof StressTest.Test089 != 'function') throw "Dependency StressTest.Test089 is not satisfied for class StressTest.Test044" 
            if (typeof StressTest.Test092 != 'function') throw "Dependency StressTest.Test092 is not satisfied for class StressTest.Test044" 
            if (typeof StressTest.Test093 != 'function') throw "Dependency StressTest.Test093 is not satisfied for class StressTest.Test044" 
    }
})
