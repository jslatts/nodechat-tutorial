var declared = false
try {
    declared = typeof StressTest.Test042 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test042"


Class('StressTest.Test042', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test053',
           'StressTest.Test061',
           'StressTest.Test063',
           'StressTest.Test076',
           'StressTest.Test087',
           'StressTest.Test093',
           'StressTest.Test095'
    ],
    
    methods : {
        result : function () { return 42 }
    },
    
    body : function(){
            if (typeof StressTest.Test053 != 'function') throw "Dependency StressTest.Test053 is not satisfied for class StressTest.Test042" 
            if (typeof StressTest.Test061 != 'function') throw "Dependency StressTest.Test061 is not satisfied for class StressTest.Test042" 
            if (typeof StressTest.Test063 != 'function') throw "Dependency StressTest.Test063 is not satisfied for class StressTest.Test042" 
            if (typeof StressTest.Test076 != 'function') throw "Dependency StressTest.Test076 is not satisfied for class StressTest.Test042" 
            if (typeof StressTest.Test087 != 'function') throw "Dependency StressTest.Test087 is not satisfied for class StressTest.Test042" 
            if (typeof StressTest.Test093 != 'function') throw "Dependency StressTest.Test093 is not satisfied for class StressTest.Test042" 
            if (typeof StressTest.Test095 != 'function') throw "Dependency StressTest.Test095 is not satisfied for class StressTest.Test042" 
    }
})
