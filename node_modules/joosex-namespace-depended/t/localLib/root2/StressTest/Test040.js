var declared = false
try {
    declared = typeof StressTest.Test040 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test040"


Class('StressTest.Test040', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test044',
           'StressTest.Test048',
           'StressTest.Test059',
           'StressTest.Test069',
           'StressTest.Test079',
           'StressTest.Test088',
           'StressTest.Test096'
    ],
    
    methods : {
        result : function () { return 40 }
    },
    
    body : function(){
            if (typeof StressTest.Test044 != 'function') throw "Dependency StressTest.Test044 is not satisfied for class StressTest.Test040" 
            if (typeof StressTest.Test048 != 'function') throw "Dependency StressTest.Test048 is not satisfied for class StressTest.Test040" 
            if (typeof StressTest.Test059 != 'function') throw "Dependency StressTest.Test059 is not satisfied for class StressTest.Test040" 
            if (typeof StressTest.Test069 != 'function') throw "Dependency StressTest.Test069 is not satisfied for class StressTest.Test040" 
            if (typeof StressTest.Test079 != 'function') throw "Dependency StressTest.Test079 is not satisfied for class StressTest.Test040" 
            if (typeof StressTest.Test088 != 'function') throw "Dependency StressTest.Test088 is not satisfied for class StressTest.Test040" 
            if (typeof StressTest.Test096 != 'function') throw "Dependency StressTest.Test096 is not satisfied for class StressTest.Test040" 
    }
})
