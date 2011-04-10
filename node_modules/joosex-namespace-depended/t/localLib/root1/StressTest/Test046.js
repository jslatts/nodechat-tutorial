var declared = false
try {
    declared = typeof StressTest.Test046 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test046"


Class('StressTest.Test046', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test052',
           'StressTest.Test055',
           'StressTest.Test056',
           'StressTest.Test057',
           'StressTest.Test059',
           'StressTest.Test061',
           'StressTest.Test065',
           'StressTest.Test068',
           'StressTest.Test077',
           'StressTest.Test095',
           'StressTest.Test097'
    ],
    
    methods : {
        result : function () { return 46 }
    },
    
    body : function(){
            if (typeof StressTest.Test052 != 'function') throw "Dependency StressTest.Test052 is not satisfied for class StressTest.Test046" 
            if (typeof StressTest.Test055 != 'function') throw "Dependency StressTest.Test055 is not satisfied for class StressTest.Test046" 
            if (typeof StressTest.Test056 != 'function') throw "Dependency StressTest.Test056 is not satisfied for class StressTest.Test046" 
            if (typeof StressTest.Test057 != 'function') throw "Dependency StressTest.Test057 is not satisfied for class StressTest.Test046" 
            if (typeof StressTest.Test059 != 'function') throw "Dependency StressTest.Test059 is not satisfied for class StressTest.Test046" 
            if (typeof StressTest.Test061 != 'function') throw "Dependency StressTest.Test061 is not satisfied for class StressTest.Test046" 
            if (typeof StressTest.Test065 != 'function') throw "Dependency StressTest.Test065 is not satisfied for class StressTest.Test046" 
            if (typeof StressTest.Test068 != 'function') throw "Dependency StressTest.Test068 is not satisfied for class StressTest.Test046" 
            if (typeof StressTest.Test077 != 'function') throw "Dependency StressTest.Test077 is not satisfied for class StressTest.Test046" 
            if (typeof StressTest.Test095 != 'function') throw "Dependency StressTest.Test095 is not satisfied for class StressTest.Test046" 
            if (typeof StressTest.Test097 != 'function') throw "Dependency StressTest.Test097 is not satisfied for class StressTest.Test046" 
    }
})
