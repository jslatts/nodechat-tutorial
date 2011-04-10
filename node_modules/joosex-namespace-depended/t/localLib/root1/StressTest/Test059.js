var declared = false
try {
    declared = typeof StressTest.Test059 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test059"


Class('StressTest.Test059', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test062',
           'StressTest.Test068',
           'StressTest.Test069',
           'StressTest.Test070',
           'StressTest.Test072',
           'StressTest.Test078',
           'StressTest.Test079',
           'StressTest.Test080',
           'StressTest.Test081',
           'StressTest.Test087'
    ],
    
    methods : {
        result : function () { return 59 }
    },
    
    body : function(){
            if (typeof StressTest.Test062 != 'function') throw "Dependency StressTest.Test062 is not satisfied for class StressTest.Test059" 
            if (typeof StressTest.Test068 != 'function') throw "Dependency StressTest.Test068 is not satisfied for class StressTest.Test059" 
            if (typeof StressTest.Test069 != 'function') throw "Dependency StressTest.Test069 is not satisfied for class StressTest.Test059" 
            if (typeof StressTest.Test070 != 'function') throw "Dependency StressTest.Test070 is not satisfied for class StressTest.Test059" 
            if (typeof StressTest.Test072 != 'function') throw "Dependency StressTest.Test072 is not satisfied for class StressTest.Test059" 
            if (typeof StressTest.Test078 != 'function') throw "Dependency StressTest.Test078 is not satisfied for class StressTest.Test059" 
            if (typeof StressTest.Test079 != 'function') throw "Dependency StressTest.Test079 is not satisfied for class StressTest.Test059" 
            if (typeof StressTest.Test080 != 'function') throw "Dependency StressTest.Test080 is not satisfied for class StressTest.Test059" 
            if (typeof StressTest.Test081 != 'function') throw "Dependency StressTest.Test081 is not satisfied for class StressTest.Test059" 
            if (typeof StressTest.Test087 != 'function') throw "Dependency StressTest.Test087 is not satisfied for class StressTest.Test059" 
    }
})
