var declared = false
try {
    declared = typeof StressTest.Test013 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test013"


Class('StressTest.Test013', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test028',
           'StressTest.Test052',
           'StressTest.Test055',
           'StressTest.Test059',
           'StressTest.Test061',
           'StressTest.Test083'
    ],
    
    methods : {
        result : function () { return 13 }
    },
    
    body : function(){
            if (typeof StressTest.Test028 != 'function') throw "Dependency StressTest.Test028 is not satisfied for class StressTest.Test013" 
            if (typeof StressTest.Test052 != 'function') throw "Dependency StressTest.Test052 is not satisfied for class StressTest.Test013" 
            if (typeof StressTest.Test055 != 'function') throw "Dependency StressTest.Test055 is not satisfied for class StressTest.Test013" 
            if (typeof StressTest.Test059 != 'function') throw "Dependency StressTest.Test059 is not satisfied for class StressTest.Test013" 
            if (typeof StressTest.Test061 != 'function') throw "Dependency StressTest.Test061 is not satisfied for class StressTest.Test013" 
            if (typeof StressTest.Test083 != 'function') throw "Dependency StressTest.Test083 is not satisfied for class StressTest.Test013" 
    }
})
