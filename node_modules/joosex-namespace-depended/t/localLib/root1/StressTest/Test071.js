var declared = false
try {
    declared = typeof StressTest.Test071 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test071"


Class('StressTest.Test071', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test072',
           'StressTest.Test073',
           'StressTest.Test074',
           'StressTest.Test075',
           'StressTest.Test082',
           'StressTest.Test085',
           'StressTest.Test088',
           'StressTest.Test089',
           'StressTest.Test092',
           'StressTest.Test096'
    ],
    
    methods : {
        result : function () { return 71 }
    },
    
    body : function(){
            if (typeof StressTest.Test072 != 'function') throw "Dependency StressTest.Test072 is not satisfied for class StressTest.Test071" 
            if (typeof StressTest.Test073 != 'function') throw "Dependency StressTest.Test073 is not satisfied for class StressTest.Test071" 
            if (typeof StressTest.Test074 != 'function') throw "Dependency StressTest.Test074 is not satisfied for class StressTest.Test071" 
            if (typeof StressTest.Test075 != 'function') throw "Dependency StressTest.Test075 is not satisfied for class StressTest.Test071" 
            if (typeof StressTest.Test082 != 'function') throw "Dependency StressTest.Test082 is not satisfied for class StressTest.Test071" 
            if (typeof StressTest.Test085 != 'function') throw "Dependency StressTest.Test085 is not satisfied for class StressTest.Test071" 
            if (typeof StressTest.Test088 != 'function') throw "Dependency StressTest.Test088 is not satisfied for class StressTest.Test071" 
            if (typeof StressTest.Test089 != 'function') throw "Dependency StressTest.Test089 is not satisfied for class StressTest.Test071" 
            if (typeof StressTest.Test092 != 'function') throw "Dependency StressTest.Test092 is not satisfied for class StressTest.Test071" 
            if (typeof StressTest.Test096 != 'function') throw "Dependency StressTest.Test096 is not satisfied for class StressTest.Test071" 
    }
})
