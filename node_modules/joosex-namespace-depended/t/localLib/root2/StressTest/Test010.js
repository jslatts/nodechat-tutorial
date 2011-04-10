var declared = false
try {
    declared = typeof StressTest.Test010 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test010"


Class('StressTest.Test010', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test017',
           'StressTest.Test035',
           'StressTest.Test040',
           'StressTest.Test044',
           'StressTest.Test047',
           'StressTest.Test051',
           'StressTest.Test064',
           'StressTest.Test074',
           'StressTest.Test084',
           'StressTest.Test086'
    ],
    
    methods : {
        result : function () { return 10 }
    },
    
    body : function(){
            if (typeof StressTest.Test017 != 'function') throw "Dependency StressTest.Test017 is not satisfied for class StressTest.Test010" 
            if (typeof StressTest.Test035 != 'function') throw "Dependency StressTest.Test035 is not satisfied for class StressTest.Test010" 
            if (typeof StressTest.Test040 != 'function') throw "Dependency StressTest.Test040 is not satisfied for class StressTest.Test010" 
            if (typeof StressTest.Test044 != 'function') throw "Dependency StressTest.Test044 is not satisfied for class StressTest.Test010" 
            if (typeof StressTest.Test047 != 'function') throw "Dependency StressTest.Test047 is not satisfied for class StressTest.Test010" 
            if (typeof StressTest.Test051 != 'function') throw "Dependency StressTest.Test051 is not satisfied for class StressTest.Test010" 
            if (typeof StressTest.Test064 != 'function') throw "Dependency StressTest.Test064 is not satisfied for class StressTest.Test010" 
            if (typeof StressTest.Test074 != 'function') throw "Dependency StressTest.Test074 is not satisfied for class StressTest.Test010" 
            if (typeof StressTest.Test084 != 'function') throw "Dependency StressTest.Test084 is not satisfied for class StressTest.Test010" 
            if (typeof StressTest.Test086 != 'function') throw "Dependency StressTest.Test086 is not satisfied for class StressTest.Test010" 
    }
})
