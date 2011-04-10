var declared = false
try {
    declared = typeof StressTest.Test047 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test047"


Class('StressTest.Test047', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test051',
           'StressTest.Test053',
           'StressTest.Test057',
           'StressTest.Test060',
           'StressTest.Test063',
           'StressTest.Test065',
           'StressTest.Test066',
           'StressTest.Test068',
           'StressTest.Test076',
           'StressTest.Test077',
           'StressTest.Test094',
           'StressTest.Test099'
    ],
    
    methods : {
        result : function () { return 47 }
    },
    
    body : function(){
            if (typeof StressTest.Test051 != 'function') throw "Dependency StressTest.Test051 is not satisfied for class StressTest.Test047" 
            if (typeof StressTest.Test053 != 'function') throw "Dependency StressTest.Test053 is not satisfied for class StressTest.Test047" 
            if (typeof StressTest.Test057 != 'function') throw "Dependency StressTest.Test057 is not satisfied for class StressTest.Test047" 
            if (typeof StressTest.Test060 != 'function') throw "Dependency StressTest.Test060 is not satisfied for class StressTest.Test047" 
            if (typeof StressTest.Test063 != 'function') throw "Dependency StressTest.Test063 is not satisfied for class StressTest.Test047" 
            if (typeof StressTest.Test065 != 'function') throw "Dependency StressTest.Test065 is not satisfied for class StressTest.Test047" 
            if (typeof StressTest.Test066 != 'function') throw "Dependency StressTest.Test066 is not satisfied for class StressTest.Test047" 
            if (typeof StressTest.Test068 != 'function') throw "Dependency StressTest.Test068 is not satisfied for class StressTest.Test047" 
            if (typeof StressTest.Test076 != 'function') throw "Dependency StressTest.Test076 is not satisfied for class StressTest.Test047" 
            if (typeof StressTest.Test077 != 'function') throw "Dependency StressTest.Test077 is not satisfied for class StressTest.Test047" 
            if (typeof StressTest.Test094 != 'function') throw "Dependency StressTest.Test094 is not satisfied for class StressTest.Test047" 
            if (typeof StressTest.Test099 != 'function') throw "Dependency StressTest.Test099 is not satisfied for class StressTest.Test047" 
    }
})
