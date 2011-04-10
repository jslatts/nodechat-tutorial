var declared = false
try {
    declared = typeof StressTest.Test056 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test056"


Class('StressTest.Test056', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test057',
           'StressTest.Test058',
           'StressTest.Test063',
           'StressTest.Test065',
           'StressTest.Test067',
           'StressTest.Test068',
           'StressTest.Test077',
           'StressTest.Test081',
           'StressTest.Test085',
           'StressTest.Test088',
           'StressTest.Test095'
    ],
    
    methods : {
        result : function () { return 56 }
    },
    
    body : function(){
            if (typeof StressTest.Test057 != 'function') throw "Dependency StressTest.Test057 is not satisfied for class StressTest.Test056" 
            if (typeof StressTest.Test058 != 'function') throw "Dependency StressTest.Test058 is not satisfied for class StressTest.Test056" 
            if (typeof StressTest.Test063 != 'function') throw "Dependency StressTest.Test063 is not satisfied for class StressTest.Test056" 
            if (typeof StressTest.Test065 != 'function') throw "Dependency StressTest.Test065 is not satisfied for class StressTest.Test056" 
            if (typeof StressTest.Test067 != 'function') throw "Dependency StressTest.Test067 is not satisfied for class StressTest.Test056" 
            if (typeof StressTest.Test068 != 'function') throw "Dependency StressTest.Test068 is not satisfied for class StressTest.Test056" 
            if (typeof StressTest.Test077 != 'function') throw "Dependency StressTest.Test077 is not satisfied for class StressTest.Test056" 
            if (typeof StressTest.Test081 != 'function') throw "Dependency StressTest.Test081 is not satisfied for class StressTest.Test056" 
            if (typeof StressTest.Test085 != 'function') throw "Dependency StressTest.Test085 is not satisfied for class StressTest.Test056" 
            if (typeof StressTest.Test088 != 'function') throw "Dependency StressTest.Test088 is not satisfied for class StressTest.Test056" 
            if (typeof StressTest.Test095 != 'function') throw "Dependency StressTest.Test095 is not satisfied for class StressTest.Test056" 
    }
})
