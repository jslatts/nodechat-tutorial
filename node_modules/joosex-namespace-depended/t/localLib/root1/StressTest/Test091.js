var declared = false
try {
    declared = typeof StressTest.Test091 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test091"


Class('StressTest.Test091', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test092',
           'StressTest.Test093',
           'StressTest.Test094',
           'StressTest.Test095',
           'StressTest.Test096',
           'StressTest.Test097',
           'StressTest.Test098',
           'StressTest.Test099',
           'StressTest.Test100'
    ],
    
    methods : {
        result : function () { return 91 }
    },
    
    body : function(){
            if (typeof StressTest.Test092 != 'function') throw "Dependency StressTest.Test092 is not satisfied for class StressTest.Test091" 
            if (typeof StressTest.Test093 != 'function') throw "Dependency StressTest.Test093 is not satisfied for class StressTest.Test091" 
            if (typeof StressTest.Test094 != 'function') throw "Dependency StressTest.Test094 is not satisfied for class StressTest.Test091" 
            if (typeof StressTest.Test095 != 'function') throw "Dependency StressTest.Test095 is not satisfied for class StressTest.Test091" 
            if (typeof StressTest.Test096 != 'function') throw "Dependency StressTest.Test096 is not satisfied for class StressTest.Test091" 
            if (typeof StressTest.Test097 != 'function') throw "Dependency StressTest.Test097 is not satisfied for class StressTest.Test091" 
            if (typeof StressTest.Test098 != 'function') throw "Dependency StressTest.Test098 is not satisfied for class StressTest.Test091" 
            if (typeof StressTest.Test099 != 'function') throw "Dependency StressTest.Test099 is not satisfied for class StressTest.Test091" 
            if (typeof StressTest.Test100 != 'function') throw "Dependency StressTest.Test100 is not satisfied for class StressTest.Test091" 
    }
})
