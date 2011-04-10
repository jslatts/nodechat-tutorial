var declared = false
try {
    declared = typeof StressTest.Test017 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test017"


Class('StressTest.Test017', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test018',
           'StressTest.Test028',
           'StressTest.Test031',
           'StressTest.Test042',
           'StressTest.Test043',
           'StressTest.Test051',
           'StressTest.Test053',
           'StressTest.Test054',
           'StressTest.Test056',
           'StressTest.Test066',
           'StressTest.Test083',
           'StressTest.Test087',
           'StressTest.Test089',
           'StressTest.Test099'
    ],
    
    methods : {
        result : function () { return 17 }
    },
    
    body : function(){
            if (typeof StressTest.Test018 != 'function') throw "Dependency StressTest.Test018 is not satisfied for class StressTest.Test017" 
            if (typeof StressTest.Test028 != 'function') throw "Dependency StressTest.Test028 is not satisfied for class StressTest.Test017" 
            if (typeof StressTest.Test031 != 'function') throw "Dependency StressTest.Test031 is not satisfied for class StressTest.Test017" 
            if (typeof StressTest.Test042 != 'function') throw "Dependency StressTest.Test042 is not satisfied for class StressTest.Test017" 
            if (typeof StressTest.Test043 != 'function') throw "Dependency StressTest.Test043 is not satisfied for class StressTest.Test017" 
            if (typeof StressTest.Test051 != 'function') throw "Dependency StressTest.Test051 is not satisfied for class StressTest.Test017" 
            if (typeof StressTest.Test053 != 'function') throw "Dependency StressTest.Test053 is not satisfied for class StressTest.Test017" 
            if (typeof StressTest.Test054 != 'function') throw "Dependency StressTest.Test054 is not satisfied for class StressTest.Test017" 
            if (typeof StressTest.Test056 != 'function') throw "Dependency StressTest.Test056 is not satisfied for class StressTest.Test017" 
            if (typeof StressTest.Test066 != 'function') throw "Dependency StressTest.Test066 is not satisfied for class StressTest.Test017" 
            if (typeof StressTest.Test083 != 'function') throw "Dependency StressTest.Test083 is not satisfied for class StressTest.Test017" 
            if (typeof StressTest.Test087 != 'function') throw "Dependency StressTest.Test087 is not satisfied for class StressTest.Test017" 
            if (typeof StressTest.Test089 != 'function') throw "Dependency StressTest.Test089 is not satisfied for class StressTest.Test017" 
            if (typeof StressTest.Test099 != 'function') throw "Dependency StressTest.Test099 is not satisfied for class StressTest.Test017" 
    }
})
