var declared = false
try {
    declared = typeof StressTest.Test006 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test006"


Class('StressTest.Test006', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test023',
           'StressTest.Test033',
           'StressTest.Test058',
           'StressTest.Test060',
           'StressTest.Test084',
           'StressTest.Test099'
    ],
    
    methods : {
        result : function () { return 6 }
    },
    
    body : function(){
            if (typeof StressTest.Test023 != 'function') throw "Dependency StressTest.Test023 is not satisfied for class StressTest.Test006" 
            if (typeof StressTest.Test033 != 'function') throw "Dependency StressTest.Test033 is not satisfied for class StressTest.Test006" 
            if (typeof StressTest.Test058 != 'function') throw "Dependency StressTest.Test058 is not satisfied for class StressTest.Test006" 
            if (typeof StressTest.Test060 != 'function') throw "Dependency StressTest.Test060 is not satisfied for class StressTest.Test006" 
            if (typeof StressTest.Test084 != 'function') throw "Dependency StressTest.Test084 is not satisfied for class StressTest.Test006" 
            if (typeof StressTest.Test099 != 'function') throw "Dependency StressTest.Test099 is not satisfied for class StressTest.Test006" 
    }
})
