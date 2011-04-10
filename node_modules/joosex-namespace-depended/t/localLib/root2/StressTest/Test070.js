var declared = false
try {
    declared = typeof StressTest.Test070 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test070"


Class('StressTest.Test070', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test071',
           'StressTest.Test074',
           'StressTest.Test075',
           'StressTest.Test082',
           'StressTest.Test084',
           'StressTest.Test085',
           'StressTest.Test095',
           'StressTest.Test096',
           'StressTest.Test100'
    ],
    
    methods : {
        result : function () { return 70 }
    },
    
    body : function(){
            if (typeof StressTest.Test071 != 'function') throw "Dependency StressTest.Test071 is not satisfied for class StressTest.Test070" 
            if (typeof StressTest.Test074 != 'function') throw "Dependency StressTest.Test074 is not satisfied for class StressTest.Test070" 
            if (typeof StressTest.Test075 != 'function') throw "Dependency StressTest.Test075 is not satisfied for class StressTest.Test070" 
            if (typeof StressTest.Test082 != 'function') throw "Dependency StressTest.Test082 is not satisfied for class StressTest.Test070" 
            if (typeof StressTest.Test084 != 'function') throw "Dependency StressTest.Test084 is not satisfied for class StressTest.Test070" 
            if (typeof StressTest.Test085 != 'function') throw "Dependency StressTest.Test085 is not satisfied for class StressTest.Test070" 
            if (typeof StressTest.Test095 != 'function') throw "Dependency StressTest.Test095 is not satisfied for class StressTest.Test070" 
            if (typeof StressTest.Test096 != 'function') throw "Dependency StressTest.Test096 is not satisfied for class StressTest.Test070" 
            if (typeof StressTest.Test100 != 'function') throw "Dependency StressTest.Test100 is not satisfied for class StressTest.Test070" 
    }
})
