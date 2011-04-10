var declared = false
try {
    declared = typeof StressTest.Test083 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test083"


Class('StressTest.Test083', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test084',
           'StressTest.Test085',
           'StressTest.Test087',
           'StressTest.Test089',
           'StressTest.Test090',
           'StressTest.Test091',
           'StressTest.Test093',
           'StressTest.Test094',
           'StressTest.Test096',
           'StressTest.Test097',
           'StressTest.Test098',
           'StressTest.Test099',
           'StressTest.Test100'
    ],
    
    methods : {
        result : function () { return 83 }
    },
    
    body : function(){
            if (typeof StressTest.Test084 != 'function') throw "Dependency StressTest.Test084 is not satisfied for class StressTest.Test083" 
            if (typeof StressTest.Test085 != 'function') throw "Dependency StressTest.Test085 is not satisfied for class StressTest.Test083" 
            if (typeof StressTest.Test087 != 'function') throw "Dependency StressTest.Test087 is not satisfied for class StressTest.Test083" 
            if (typeof StressTest.Test089 != 'function') throw "Dependency StressTest.Test089 is not satisfied for class StressTest.Test083" 
            if (typeof StressTest.Test090 != 'function') throw "Dependency StressTest.Test090 is not satisfied for class StressTest.Test083" 
            if (typeof StressTest.Test091 != 'function') throw "Dependency StressTest.Test091 is not satisfied for class StressTest.Test083" 
            if (typeof StressTest.Test093 != 'function') throw "Dependency StressTest.Test093 is not satisfied for class StressTest.Test083" 
            if (typeof StressTest.Test094 != 'function') throw "Dependency StressTest.Test094 is not satisfied for class StressTest.Test083" 
            if (typeof StressTest.Test096 != 'function') throw "Dependency StressTest.Test096 is not satisfied for class StressTest.Test083" 
            if (typeof StressTest.Test097 != 'function') throw "Dependency StressTest.Test097 is not satisfied for class StressTest.Test083" 
            if (typeof StressTest.Test098 != 'function') throw "Dependency StressTest.Test098 is not satisfied for class StressTest.Test083" 
            if (typeof StressTest.Test099 != 'function') throw "Dependency StressTest.Test099 is not satisfied for class StressTest.Test083" 
            if (typeof StressTest.Test100 != 'function') throw "Dependency StressTest.Test100 is not satisfied for class StressTest.Test083" 
    }
})
