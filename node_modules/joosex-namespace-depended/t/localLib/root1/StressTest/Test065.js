var declared = false
try {
    declared = typeof StressTest.Test065 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test065"


Class('StressTest.Test065', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test076',
           'StressTest.Test080',
           'StressTest.Test084',
           'StressTest.Test086',
           'StressTest.Test089',
           'StressTest.Test091',
           'StressTest.Test100'
    ],
    
    methods : {
        result : function () { return 65 }
    },
    
    body : function(){
            if (typeof StressTest.Test076 != 'function') throw "Dependency StressTest.Test076 is not satisfied for class StressTest.Test065" 
            if (typeof StressTest.Test080 != 'function') throw "Dependency StressTest.Test080 is not satisfied for class StressTest.Test065" 
            if (typeof StressTest.Test084 != 'function') throw "Dependency StressTest.Test084 is not satisfied for class StressTest.Test065" 
            if (typeof StressTest.Test086 != 'function') throw "Dependency StressTest.Test086 is not satisfied for class StressTest.Test065" 
            if (typeof StressTest.Test089 != 'function') throw "Dependency StressTest.Test089 is not satisfied for class StressTest.Test065" 
            if (typeof StressTest.Test091 != 'function') throw "Dependency StressTest.Test091 is not satisfied for class StressTest.Test065" 
            if (typeof StressTest.Test100 != 'function') throw "Dependency StressTest.Test100 is not satisfied for class StressTest.Test065" 
    }
})
