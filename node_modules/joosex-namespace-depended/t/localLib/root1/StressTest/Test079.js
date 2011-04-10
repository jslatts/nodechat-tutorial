var declared = false
try {
    declared = typeof StressTest.Test079 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test079"


Class('StressTest.Test079', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test080',
           'StressTest.Test083',
           'StressTest.Test085',
           'StressTest.Test086',
           'StressTest.Test087',
           'StressTest.Test088',
           'StressTest.Test089',
           'StressTest.Test090',
           'StressTest.Test092',
           'StressTest.Test094',
           'StressTest.Test095',
           'StressTest.Test099'
    ],
    
    methods : {
        result : function () { return 79 }
    },
    
    body : function(){
            if (typeof StressTest.Test080 != 'function') throw "Dependency StressTest.Test080 is not satisfied for class StressTest.Test079" 
            if (typeof StressTest.Test083 != 'function') throw "Dependency StressTest.Test083 is not satisfied for class StressTest.Test079" 
            if (typeof StressTest.Test085 != 'function') throw "Dependency StressTest.Test085 is not satisfied for class StressTest.Test079" 
            if (typeof StressTest.Test086 != 'function') throw "Dependency StressTest.Test086 is not satisfied for class StressTest.Test079" 
            if (typeof StressTest.Test087 != 'function') throw "Dependency StressTest.Test087 is not satisfied for class StressTest.Test079" 
            if (typeof StressTest.Test088 != 'function') throw "Dependency StressTest.Test088 is not satisfied for class StressTest.Test079" 
            if (typeof StressTest.Test089 != 'function') throw "Dependency StressTest.Test089 is not satisfied for class StressTest.Test079" 
            if (typeof StressTest.Test090 != 'function') throw "Dependency StressTest.Test090 is not satisfied for class StressTest.Test079" 
            if (typeof StressTest.Test092 != 'function') throw "Dependency StressTest.Test092 is not satisfied for class StressTest.Test079" 
            if (typeof StressTest.Test094 != 'function') throw "Dependency StressTest.Test094 is not satisfied for class StressTest.Test079" 
            if (typeof StressTest.Test095 != 'function') throw "Dependency StressTest.Test095 is not satisfied for class StressTest.Test079" 
            if (typeof StressTest.Test099 != 'function') throw "Dependency StressTest.Test099 is not satisfied for class StressTest.Test079" 
    }
})
