var declared = false
try {
    declared = typeof StressTest.Test020 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test020"


Class('StressTest.Test020', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test023',
           'StressTest.Test035',
           'StressTest.Test042',
           'StressTest.Test044',
           'StressTest.Test048',
           'StressTest.Test056',
           'StressTest.Test059',
           'StressTest.Test068',
           'StressTest.Test080',
           'StressTest.Test082',
           'StressTest.Test087',
           'StressTest.Test091'
    ],
    
    methods : {
        result : function () { return 20 }
    },
    
    body : function(){
            if (typeof StressTest.Test023 != 'function') throw "Dependency StressTest.Test023 is not satisfied for class StressTest.Test020" 
            if (typeof StressTest.Test035 != 'function') throw "Dependency StressTest.Test035 is not satisfied for class StressTest.Test020" 
            if (typeof StressTest.Test042 != 'function') throw "Dependency StressTest.Test042 is not satisfied for class StressTest.Test020" 
            if (typeof StressTest.Test044 != 'function') throw "Dependency StressTest.Test044 is not satisfied for class StressTest.Test020" 
            if (typeof StressTest.Test048 != 'function') throw "Dependency StressTest.Test048 is not satisfied for class StressTest.Test020" 
            if (typeof StressTest.Test056 != 'function') throw "Dependency StressTest.Test056 is not satisfied for class StressTest.Test020" 
            if (typeof StressTest.Test059 != 'function') throw "Dependency StressTest.Test059 is not satisfied for class StressTest.Test020" 
            if (typeof StressTest.Test068 != 'function') throw "Dependency StressTest.Test068 is not satisfied for class StressTest.Test020" 
            if (typeof StressTest.Test080 != 'function') throw "Dependency StressTest.Test080 is not satisfied for class StressTest.Test020" 
            if (typeof StressTest.Test082 != 'function') throw "Dependency StressTest.Test082 is not satisfied for class StressTest.Test020" 
            if (typeof StressTest.Test087 != 'function') throw "Dependency StressTest.Test087 is not satisfied for class StressTest.Test020" 
            if (typeof StressTest.Test091 != 'function') throw "Dependency StressTest.Test091 is not satisfied for class StressTest.Test020" 
    }
})
