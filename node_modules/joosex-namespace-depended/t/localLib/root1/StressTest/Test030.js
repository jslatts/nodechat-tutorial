var declared = false
try {
    declared = typeof StressTest.Test030 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test030"


Class('StressTest.Test030', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test037',
           'StressTest.Test041',
           'StressTest.Test046',
           'StressTest.Test048',
           'StressTest.Test054',
           'StressTest.Test057',
           'StressTest.Test059',
           'StressTest.Test072',
           'StressTest.Test097'
    ],
    
    methods : {
        result : function () { return 30 }
    },
    
    body : function(){
            if (typeof StressTest.Test037 != 'function') throw "Dependency StressTest.Test037 is not satisfied for class StressTest.Test030" 
            if (typeof StressTest.Test041 != 'function') throw "Dependency StressTest.Test041 is not satisfied for class StressTest.Test030" 
            if (typeof StressTest.Test046 != 'function') throw "Dependency StressTest.Test046 is not satisfied for class StressTest.Test030" 
            if (typeof StressTest.Test048 != 'function') throw "Dependency StressTest.Test048 is not satisfied for class StressTest.Test030" 
            if (typeof StressTest.Test054 != 'function') throw "Dependency StressTest.Test054 is not satisfied for class StressTest.Test030" 
            if (typeof StressTest.Test057 != 'function') throw "Dependency StressTest.Test057 is not satisfied for class StressTest.Test030" 
            if (typeof StressTest.Test059 != 'function') throw "Dependency StressTest.Test059 is not satisfied for class StressTest.Test030" 
            if (typeof StressTest.Test072 != 'function') throw "Dependency StressTest.Test072 is not satisfied for class StressTest.Test030" 
            if (typeof StressTest.Test097 != 'function') throw "Dependency StressTest.Test097 is not satisfied for class StressTest.Test030" 
    }
})
