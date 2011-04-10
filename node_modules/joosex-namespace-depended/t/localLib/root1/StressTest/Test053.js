var declared = false
try {
    declared = typeof StressTest.Test053 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test053"


Class('StressTest.Test053', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test054',
           'StressTest.Test055',
           'StressTest.Test062',
           'StressTest.Test065',
           'StressTest.Test066',
           'StressTest.Test078',
           'StressTest.Test081',
           'StressTest.Test086',
           'StressTest.Test092'
    ],
    
    methods : {
        result : function () { return 53 }
    },
    
    body : function(){
            if (typeof StressTest.Test054 != 'function') throw "Dependency StressTest.Test054 is not satisfied for class StressTest.Test053" 
            if (typeof StressTest.Test055 != 'function') throw "Dependency StressTest.Test055 is not satisfied for class StressTest.Test053" 
            if (typeof StressTest.Test062 != 'function') throw "Dependency StressTest.Test062 is not satisfied for class StressTest.Test053" 
            if (typeof StressTest.Test065 != 'function') throw "Dependency StressTest.Test065 is not satisfied for class StressTest.Test053" 
            if (typeof StressTest.Test066 != 'function') throw "Dependency StressTest.Test066 is not satisfied for class StressTest.Test053" 
            if (typeof StressTest.Test078 != 'function') throw "Dependency StressTest.Test078 is not satisfied for class StressTest.Test053" 
            if (typeof StressTest.Test081 != 'function') throw "Dependency StressTest.Test081 is not satisfied for class StressTest.Test053" 
            if (typeof StressTest.Test086 != 'function') throw "Dependency StressTest.Test086 is not satisfied for class StressTest.Test053" 
            if (typeof StressTest.Test092 != 'function') throw "Dependency StressTest.Test092 is not satisfied for class StressTest.Test053" 
    }
})
