var declared = false
try {
    declared = typeof StressTest.Test049 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test049"


Class('StressTest.Test049', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test058',
           'StressTest.Test060',
           'StressTest.Test062',
           'StressTest.Test064',
           'StressTest.Test065',
           'StressTest.Test069',
           'StressTest.Test080',
           'StressTest.Test092',
           'StressTest.Test097',
           'StressTest.Test099'
    ],
    
    methods : {
        result : function () { return 49 }
    },
    
    body : function(){
            if (typeof StressTest.Test058 != 'function') throw "Dependency StressTest.Test058 is not satisfied for class StressTest.Test049" 
            if (typeof StressTest.Test060 != 'function') throw "Dependency StressTest.Test060 is not satisfied for class StressTest.Test049" 
            if (typeof StressTest.Test062 != 'function') throw "Dependency StressTest.Test062 is not satisfied for class StressTest.Test049" 
            if (typeof StressTest.Test064 != 'function') throw "Dependency StressTest.Test064 is not satisfied for class StressTest.Test049" 
            if (typeof StressTest.Test065 != 'function') throw "Dependency StressTest.Test065 is not satisfied for class StressTest.Test049" 
            if (typeof StressTest.Test069 != 'function') throw "Dependency StressTest.Test069 is not satisfied for class StressTest.Test049" 
            if (typeof StressTest.Test080 != 'function') throw "Dependency StressTest.Test080 is not satisfied for class StressTest.Test049" 
            if (typeof StressTest.Test092 != 'function') throw "Dependency StressTest.Test092 is not satisfied for class StressTest.Test049" 
            if (typeof StressTest.Test097 != 'function') throw "Dependency StressTest.Test097 is not satisfied for class StressTest.Test049" 
            if (typeof StressTest.Test099 != 'function') throw "Dependency StressTest.Test099 is not satisfied for class StressTest.Test049" 
    }
})
