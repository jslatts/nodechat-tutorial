var declared = false
try {
    declared = typeof StressTest.Test029 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test029"


Class('StressTest.Test029', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test033',
           'StressTest.Test034',
           'StressTest.Test035',
           'StressTest.Test041',
           'StressTest.Test044',
           'StressTest.Test048',
           'StressTest.Test050',
           'StressTest.Test057',
           'StressTest.Test062',
           'StressTest.Test063',
           'StressTest.Test066',
           'StressTest.Test077',
           'StressTest.Test082'
    ],
    
    methods : {
        result : function () { return 29 }
    },
    
    body : function(){
            if (typeof StressTest.Test033 != 'function') throw "Dependency StressTest.Test033 is not satisfied for class StressTest.Test029" 
            if (typeof StressTest.Test034 != 'function') throw "Dependency StressTest.Test034 is not satisfied for class StressTest.Test029" 
            if (typeof StressTest.Test035 != 'function') throw "Dependency StressTest.Test035 is not satisfied for class StressTest.Test029" 
            if (typeof StressTest.Test041 != 'function') throw "Dependency StressTest.Test041 is not satisfied for class StressTest.Test029" 
            if (typeof StressTest.Test044 != 'function') throw "Dependency StressTest.Test044 is not satisfied for class StressTest.Test029" 
            if (typeof StressTest.Test048 != 'function') throw "Dependency StressTest.Test048 is not satisfied for class StressTest.Test029" 
            if (typeof StressTest.Test050 != 'function') throw "Dependency StressTest.Test050 is not satisfied for class StressTest.Test029" 
            if (typeof StressTest.Test057 != 'function') throw "Dependency StressTest.Test057 is not satisfied for class StressTest.Test029" 
            if (typeof StressTest.Test062 != 'function') throw "Dependency StressTest.Test062 is not satisfied for class StressTest.Test029" 
            if (typeof StressTest.Test063 != 'function') throw "Dependency StressTest.Test063 is not satisfied for class StressTest.Test029" 
            if (typeof StressTest.Test066 != 'function') throw "Dependency StressTest.Test066 is not satisfied for class StressTest.Test029" 
            if (typeof StressTest.Test077 != 'function') throw "Dependency StressTest.Test077 is not satisfied for class StressTest.Test029" 
            if (typeof StressTest.Test082 != 'function') throw "Dependency StressTest.Test082 is not satisfied for class StressTest.Test029" 
    }
})
