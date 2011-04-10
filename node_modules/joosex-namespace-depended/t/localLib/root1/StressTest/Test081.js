var declared = false
try {
    declared = typeof StressTest.Test081 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test081"


Class('StressTest.Test081', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test082',
           'StressTest.Test085',
           'StressTest.Test090',
           'StressTest.Test091',
           'StressTest.Test093',
           'StressTest.Test097',
           'StressTest.Test098'
    ],
    
    methods : {
        result : function () { return 81 }
    },
    
    body : function(){
            if (typeof StressTest.Test082 != 'function') throw "Dependency StressTest.Test082 is not satisfied for class StressTest.Test081" 
            if (typeof StressTest.Test085 != 'function') throw "Dependency StressTest.Test085 is not satisfied for class StressTest.Test081" 
            if (typeof StressTest.Test090 != 'function') throw "Dependency StressTest.Test090 is not satisfied for class StressTest.Test081" 
            if (typeof StressTest.Test091 != 'function') throw "Dependency StressTest.Test091 is not satisfied for class StressTest.Test081" 
            if (typeof StressTest.Test093 != 'function') throw "Dependency StressTest.Test093 is not satisfied for class StressTest.Test081" 
            if (typeof StressTest.Test097 != 'function') throw "Dependency StressTest.Test097 is not satisfied for class StressTest.Test081" 
            if (typeof StressTest.Test098 != 'function') throw "Dependency StressTest.Test098 is not satisfied for class StressTest.Test081" 
    }
})
