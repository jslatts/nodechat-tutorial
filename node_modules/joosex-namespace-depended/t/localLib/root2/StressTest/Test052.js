var declared = false
try {
    declared = typeof StressTest.Test052 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test052"


Class('StressTest.Test052', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test053',
           'StressTest.Test055',
           'StressTest.Test056',
           'StressTest.Test058',
           'StressTest.Test061',
           'StressTest.Test072',
           'StressTest.Test073',
           'StressTest.Test075',
           'StressTest.Test080',
           'StressTest.Test089',
           'StressTest.Test094',
           'StressTest.Test096'
    ],
    
    methods : {
        result : function () { return 52 }
    },
    
    body : function(){
            if (typeof StressTest.Test053 != 'function') throw "Dependency StressTest.Test053 is not satisfied for class StressTest.Test052" 
            if (typeof StressTest.Test055 != 'function') throw "Dependency StressTest.Test055 is not satisfied for class StressTest.Test052" 
            if (typeof StressTest.Test056 != 'function') throw "Dependency StressTest.Test056 is not satisfied for class StressTest.Test052" 
            if (typeof StressTest.Test058 != 'function') throw "Dependency StressTest.Test058 is not satisfied for class StressTest.Test052" 
            if (typeof StressTest.Test061 != 'function') throw "Dependency StressTest.Test061 is not satisfied for class StressTest.Test052" 
            if (typeof StressTest.Test072 != 'function') throw "Dependency StressTest.Test072 is not satisfied for class StressTest.Test052" 
            if (typeof StressTest.Test073 != 'function') throw "Dependency StressTest.Test073 is not satisfied for class StressTest.Test052" 
            if (typeof StressTest.Test075 != 'function') throw "Dependency StressTest.Test075 is not satisfied for class StressTest.Test052" 
            if (typeof StressTest.Test080 != 'function') throw "Dependency StressTest.Test080 is not satisfied for class StressTest.Test052" 
            if (typeof StressTest.Test089 != 'function') throw "Dependency StressTest.Test089 is not satisfied for class StressTest.Test052" 
            if (typeof StressTest.Test094 != 'function') throw "Dependency StressTest.Test094 is not satisfied for class StressTest.Test052" 
            if (typeof StressTest.Test096 != 'function') throw "Dependency StressTest.Test096 is not satisfied for class StressTest.Test052" 
    }
})
