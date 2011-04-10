var declared = false
try {
    declared = typeof StressTest.Test087 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test087"


Class('StressTest.Test087', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test088',
           'StressTest.Test089',
           'StressTest.Test090',
           'StressTest.Test091',
           'StressTest.Test092',
           'StressTest.Test093',
           'StressTest.Test094',
           'StressTest.Test095',
           'StressTest.Test099'
    ],
    
    methods : {
        result : function () { return 87 }
    },
    
    body : function(){
            if (typeof StressTest.Test088 != 'function') throw "Dependency StressTest.Test088 is not satisfied for class StressTest.Test087" 
            if (typeof StressTest.Test089 != 'function') throw "Dependency StressTest.Test089 is not satisfied for class StressTest.Test087" 
            if (typeof StressTest.Test090 != 'function') throw "Dependency StressTest.Test090 is not satisfied for class StressTest.Test087" 
            if (typeof StressTest.Test091 != 'function') throw "Dependency StressTest.Test091 is not satisfied for class StressTest.Test087" 
            if (typeof StressTest.Test092 != 'function') throw "Dependency StressTest.Test092 is not satisfied for class StressTest.Test087" 
            if (typeof StressTest.Test093 != 'function') throw "Dependency StressTest.Test093 is not satisfied for class StressTest.Test087" 
            if (typeof StressTest.Test094 != 'function') throw "Dependency StressTest.Test094 is not satisfied for class StressTest.Test087" 
            if (typeof StressTest.Test095 != 'function') throw "Dependency StressTest.Test095 is not satisfied for class StressTest.Test087" 
            if (typeof StressTest.Test099 != 'function') throw "Dependency StressTest.Test099 is not satisfied for class StressTest.Test087" 
    }
})
