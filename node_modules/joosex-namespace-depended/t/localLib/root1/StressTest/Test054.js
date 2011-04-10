var declared = false
try {
    declared = typeof StressTest.Test054 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test054"


Class('StressTest.Test054', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test057',
           'StressTest.Test058',
           'StressTest.Test069',
           'StressTest.Test072',
           'StressTest.Test080',
           'StressTest.Test087',
           'StressTest.Test092',
           'StressTest.Test095',
           'StressTest.Test100'
    ],
    
    methods : {
        result : function () { return 54 }
    },
    
    body : function(){
            if (typeof StressTest.Test057 != 'function') throw "Dependency StressTest.Test057 is not satisfied for class StressTest.Test054" 
            if (typeof StressTest.Test058 != 'function') throw "Dependency StressTest.Test058 is not satisfied for class StressTest.Test054" 
            if (typeof StressTest.Test069 != 'function') throw "Dependency StressTest.Test069 is not satisfied for class StressTest.Test054" 
            if (typeof StressTest.Test072 != 'function') throw "Dependency StressTest.Test072 is not satisfied for class StressTest.Test054" 
            if (typeof StressTest.Test080 != 'function') throw "Dependency StressTest.Test080 is not satisfied for class StressTest.Test054" 
            if (typeof StressTest.Test087 != 'function') throw "Dependency StressTest.Test087 is not satisfied for class StressTest.Test054" 
            if (typeof StressTest.Test092 != 'function') throw "Dependency StressTest.Test092 is not satisfied for class StressTest.Test054" 
            if (typeof StressTest.Test095 != 'function') throw "Dependency StressTest.Test095 is not satisfied for class StressTest.Test054" 
            if (typeof StressTest.Test100 != 'function') throw "Dependency StressTest.Test100 is not satisfied for class StressTest.Test054" 
    }
})
