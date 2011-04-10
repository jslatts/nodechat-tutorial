var declared = false
try {
    declared = typeof StressTest.Test051 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test051"


Class('StressTest.Test051', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test062',
           'StressTest.Test072',
           'StressTest.Test076',
           'StressTest.Test099'
    ],
    
    methods : {
        result : function () { return 51 }
    },
    
    body : function(){
            if (typeof StressTest.Test062 != 'function') throw "Dependency StressTest.Test062 is not satisfied for class StressTest.Test051" 
            if (typeof StressTest.Test072 != 'function') throw "Dependency StressTest.Test072 is not satisfied for class StressTest.Test051" 
            if (typeof StressTest.Test076 != 'function') throw "Dependency StressTest.Test076 is not satisfied for class StressTest.Test051" 
            if (typeof StressTest.Test099 != 'function') throw "Dependency StressTest.Test099 is not satisfied for class StressTest.Test051" 
    }
})
