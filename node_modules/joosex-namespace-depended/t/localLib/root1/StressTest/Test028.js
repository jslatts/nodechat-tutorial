var declared = false
try {
    declared = typeof StressTest.Test028 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test028"


Class('StressTest.Test028', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test034',
           'StressTest.Test043',
           'StressTest.Test047',
           'StressTest.Test060',
           'StressTest.Test066',
           'StressTest.Test084',
           'StressTest.Test085',
           'StressTest.Test087',
           'StressTest.Test094',
           'StressTest.Test098'
    ],
    
    methods : {
        result : function () { return 28 }
    },
    
    body : function(){
            if (typeof StressTest.Test034 != 'function') throw "Dependency StressTest.Test034 is not satisfied for class StressTest.Test028" 
            if (typeof StressTest.Test043 != 'function') throw "Dependency StressTest.Test043 is not satisfied for class StressTest.Test028" 
            if (typeof StressTest.Test047 != 'function') throw "Dependency StressTest.Test047 is not satisfied for class StressTest.Test028" 
            if (typeof StressTest.Test060 != 'function') throw "Dependency StressTest.Test060 is not satisfied for class StressTest.Test028" 
            if (typeof StressTest.Test066 != 'function') throw "Dependency StressTest.Test066 is not satisfied for class StressTest.Test028" 
            if (typeof StressTest.Test084 != 'function') throw "Dependency StressTest.Test084 is not satisfied for class StressTest.Test028" 
            if (typeof StressTest.Test085 != 'function') throw "Dependency StressTest.Test085 is not satisfied for class StressTest.Test028" 
            if (typeof StressTest.Test087 != 'function') throw "Dependency StressTest.Test087 is not satisfied for class StressTest.Test028" 
            if (typeof StressTest.Test094 != 'function') throw "Dependency StressTest.Test094 is not satisfied for class StressTest.Test028" 
            if (typeof StressTest.Test098 != 'function') throw "Dependency StressTest.Test098 is not satisfied for class StressTest.Test028" 
    }
})
