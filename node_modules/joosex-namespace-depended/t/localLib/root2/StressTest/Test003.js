var declared = false
try {
    declared = typeof StressTest.Test003 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test003"


Class('StressTest.Test003', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test015',
           'StressTest.Test034',
           'StressTest.Test036',
           'StressTest.Test046',
           'StressTest.Test051',
           'StressTest.Test052',
           'StressTest.Test053',
           'StressTest.Test068',
           'StressTest.Test078',
           'StressTest.Test083'
    ],
    
    methods : {
        result : function () { return 3 }
    },
    
    body : function(){
            if (typeof StressTest.Test015 != 'function') throw "Dependency StressTest.Test015 is not satisfied for class StressTest.Test003" 
            if (typeof StressTest.Test034 != 'function') throw "Dependency StressTest.Test034 is not satisfied for class StressTest.Test003" 
            if (typeof StressTest.Test036 != 'function') throw "Dependency StressTest.Test036 is not satisfied for class StressTest.Test003" 
            if (typeof StressTest.Test046 != 'function') throw "Dependency StressTest.Test046 is not satisfied for class StressTest.Test003" 
            if (typeof StressTest.Test051 != 'function') throw "Dependency StressTest.Test051 is not satisfied for class StressTest.Test003" 
            if (typeof StressTest.Test052 != 'function') throw "Dependency StressTest.Test052 is not satisfied for class StressTest.Test003" 
            if (typeof StressTest.Test053 != 'function') throw "Dependency StressTest.Test053 is not satisfied for class StressTest.Test003" 
            if (typeof StressTest.Test068 != 'function') throw "Dependency StressTest.Test068 is not satisfied for class StressTest.Test003" 
            if (typeof StressTest.Test078 != 'function') throw "Dependency StressTest.Test078 is not satisfied for class StressTest.Test003" 
            if (typeof StressTest.Test083 != 'function') throw "Dependency StressTest.Test083 is not satisfied for class StressTest.Test003" 
    }
})
