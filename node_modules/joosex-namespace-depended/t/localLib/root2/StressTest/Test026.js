var declared = false
try {
    declared = typeof StressTest.Test026 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test026"


Class('StressTest.Test026', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test035',
           'StressTest.Test044',
           'StressTest.Test055',
           'StressTest.Test064',
           'StressTest.Test065',
           'StressTest.Test078',
           'StressTest.Test092',
           'StressTest.Test099'
    ],
    
    methods : {
        result : function () { return 26 }
    },
    
    body : function(){
            if (typeof StressTest.Test035 != 'function') throw "Dependency StressTest.Test035 is not satisfied for class StressTest.Test026" 
            if (typeof StressTest.Test044 != 'function') throw "Dependency StressTest.Test044 is not satisfied for class StressTest.Test026" 
            if (typeof StressTest.Test055 != 'function') throw "Dependency StressTest.Test055 is not satisfied for class StressTest.Test026" 
            if (typeof StressTest.Test064 != 'function') throw "Dependency StressTest.Test064 is not satisfied for class StressTest.Test026" 
            if (typeof StressTest.Test065 != 'function') throw "Dependency StressTest.Test065 is not satisfied for class StressTest.Test026" 
            if (typeof StressTest.Test078 != 'function') throw "Dependency StressTest.Test078 is not satisfied for class StressTest.Test026" 
            if (typeof StressTest.Test092 != 'function') throw "Dependency StressTest.Test092 is not satisfied for class StressTest.Test026" 
            if (typeof StressTest.Test099 != 'function') throw "Dependency StressTest.Test099 is not satisfied for class StressTest.Test026" 
    }
})
