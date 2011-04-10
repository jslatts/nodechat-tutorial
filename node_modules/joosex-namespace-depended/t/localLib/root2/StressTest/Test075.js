var declared = false
try {
    declared = typeof StressTest.Test075 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test075"


Class('StressTest.Test075', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test076',
           'StressTest.Test077',
           'StressTest.Test084',
           'StressTest.Test086',
           'StressTest.Test088',
           'StressTest.Test091',
           'StressTest.Test092',
           'StressTest.Test095',
           'StressTest.Test098',
           'StressTest.Test099'
    ],
    
    methods : {
        result : function () { return 75 }
    },
    
    body : function(){
            if (typeof StressTest.Test076 != 'function') throw "Dependency StressTest.Test076 is not satisfied for class StressTest.Test075" 
            if (typeof StressTest.Test077 != 'function') throw "Dependency StressTest.Test077 is not satisfied for class StressTest.Test075" 
            if (typeof StressTest.Test084 != 'function') throw "Dependency StressTest.Test084 is not satisfied for class StressTest.Test075" 
            if (typeof StressTest.Test086 != 'function') throw "Dependency StressTest.Test086 is not satisfied for class StressTest.Test075" 
            if (typeof StressTest.Test088 != 'function') throw "Dependency StressTest.Test088 is not satisfied for class StressTest.Test075" 
            if (typeof StressTest.Test091 != 'function') throw "Dependency StressTest.Test091 is not satisfied for class StressTest.Test075" 
            if (typeof StressTest.Test092 != 'function') throw "Dependency StressTest.Test092 is not satisfied for class StressTest.Test075" 
            if (typeof StressTest.Test095 != 'function') throw "Dependency StressTest.Test095 is not satisfied for class StressTest.Test075" 
            if (typeof StressTest.Test098 != 'function') throw "Dependency StressTest.Test098 is not satisfied for class StressTest.Test075" 
            if (typeof StressTest.Test099 != 'function') throw "Dependency StressTest.Test099 is not satisfied for class StressTest.Test075" 
    }
})
