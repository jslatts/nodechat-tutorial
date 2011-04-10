var declared = false
try {
    declared = typeof StressTest.Test035 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test035"


Class('StressTest.Test035', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test040',
           'StressTest.Test044',
           'StressTest.Test045',
           'StressTest.Test051',
           'StressTest.Test055',
           'StressTest.Test057',
           'StressTest.Test065',
           'StressTest.Test075',
           'StressTest.Test083',
           'StressTest.Test092',
           'StressTest.Test098',
           'StressTest.Test100'
    ],
    
    methods : {
        result : function () { return 35 }
    },
    
    body : function(){
            if (typeof StressTest.Test040 != 'function') throw "Dependency StressTest.Test040 is not satisfied for class StressTest.Test035" 
            if (typeof StressTest.Test044 != 'function') throw "Dependency StressTest.Test044 is not satisfied for class StressTest.Test035" 
            if (typeof StressTest.Test045 != 'function') throw "Dependency StressTest.Test045 is not satisfied for class StressTest.Test035" 
            if (typeof StressTest.Test051 != 'function') throw "Dependency StressTest.Test051 is not satisfied for class StressTest.Test035" 
            if (typeof StressTest.Test055 != 'function') throw "Dependency StressTest.Test055 is not satisfied for class StressTest.Test035" 
            if (typeof StressTest.Test057 != 'function') throw "Dependency StressTest.Test057 is not satisfied for class StressTest.Test035" 
            if (typeof StressTest.Test065 != 'function') throw "Dependency StressTest.Test065 is not satisfied for class StressTest.Test035" 
            if (typeof StressTest.Test075 != 'function') throw "Dependency StressTest.Test075 is not satisfied for class StressTest.Test035" 
            if (typeof StressTest.Test083 != 'function') throw "Dependency StressTest.Test083 is not satisfied for class StressTest.Test035" 
            if (typeof StressTest.Test092 != 'function') throw "Dependency StressTest.Test092 is not satisfied for class StressTest.Test035" 
            if (typeof StressTest.Test098 != 'function') throw "Dependency StressTest.Test098 is not satisfied for class StressTest.Test035" 
            if (typeof StressTest.Test100 != 'function') throw "Dependency StressTest.Test100 is not satisfied for class StressTest.Test035" 
    }
})
