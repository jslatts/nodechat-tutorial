var declared = false
try {
    declared = typeof StressTest.Test032 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test032"


Class('StressTest.Test032', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test040',
           'StressTest.Test051',
           'StressTest.Test054',
           'StressTest.Test055',
           'StressTest.Test070',
           'StressTest.Test071',
           'StressTest.Test077',
           'StressTest.Test083',
           'StressTest.Test087',
           'StressTest.Test097',
           'StressTest.Test098',
           'StressTest.Test099'
    ],
    
    methods : {
        result : function () { return 32 }
    },
    
    body : function(){
            if (typeof StressTest.Test040 != 'function') throw "Dependency StressTest.Test040 is not satisfied for class StressTest.Test032" 
            if (typeof StressTest.Test051 != 'function') throw "Dependency StressTest.Test051 is not satisfied for class StressTest.Test032" 
            if (typeof StressTest.Test054 != 'function') throw "Dependency StressTest.Test054 is not satisfied for class StressTest.Test032" 
            if (typeof StressTest.Test055 != 'function') throw "Dependency StressTest.Test055 is not satisfied for class StressTest.Test032" 
            if (typeof StressTest.Test070 != 'function') throw "Dependency StressTest.Test070 is not satisfied for class StressTest.Test032" 
            if (typeof StressTest.Test071 != 'function') throw "Dependency StressTest.Test071 is not satisfied for class StressTest.Test032" 
            if (typeof StressTest.Test077 != 'function') throw "Dependency StressTest.Test077 is not satisfied for class StressTest.Test032" 
            if (typeof StressTest.Test083 != 'function') throw "Dependency StressTest.Test083 is not satisfied for class StressTest.Test032" 
            if (typeof StressTest.Test087 != 'function') throw "Dependency StressTest.Test087 is not satisfied for class StressTest.Test032" 
            if (typeof StressTest.Test097 != 'function') throw "Dependency StressTest.Test097 is not satisfied for class StressTest.Test032" 
            if (typeof StressTest.Test098 != 'function') throw "Dependency StressTest.Test098 is not satisfied for class StressTest.Test032" 
            if (typeof StressTest.Test099 != 'function') throw "Dependency StressTest.Test099 is not satisfied for class StressTest.Test032" 
    }
})
