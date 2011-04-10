var declared = false
try {
    declared = typeof StressTest.Test008 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test008"


Class('StressTest.Test008', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test013',
           'StressTest.Test018',
           'StressTest.Test028',
           'StressTest.Test036',
           'StressTest.Test038',
           'StressTest.Test041',
           'StressTest.Test070',
           'StressTest.Test074',
           'StressTest.Test085',
           'StressTest.Test086',
           'StressTest.Test089',
           'StressTest.Test090',
           'StressTest.Test094',
           'StressTest.Test097'
    ],
    
    methods : {
        result : function () { return 8 }
    },
    
    body : function(){
            if (typeof StressTest.Test013 != 'function') throw "Dependency StressTest.Test013 is not satisfied for class StressTest.Test008" 
            if (typeof StressTest.Test018 != 'function') throw "Dependency StressTest.Test018 is not satisfied for class StressTest.Test008" 
            if (typeof StressTest.Test028 != 'function') throw "Dependency StressTest.Test028 is not satisfied for class StressTest.Test008" 
            if (typeof StressTest.Test036 != 'function') throw "Dependency StressTest.Test036 is not satisfied for class StressTest.Test008" 
            if (typeof StressTest.Test038 != 'function') throw "Dependency StressTest.Test038 is not satisfied for class StressTest.Test008" 
            if (typeof StressTest.Test041 != 'function') throw "Dependency StressTest.Test041 is not satisfied for class StressTest.Test008" 
            if (typeof StressTest.Test070 != 'function') throw "Dependency StressTest.Test070 is not satisfied for class StressTest.Test008" 
            if (typeof StressTest.Test074 != 'function') throw "Dependency StressTest.Test074 is not satisfied for class StressTest.Test008" 
            if (typeof StressTest.Test085 != 'function') throw "Dependency StressTest.Test085 is not satisfied for class StressTest.Test008" 
            if (typeof StressTest.Test086 != 'function') throw "Dependency StressTest.Test086 is not satisfied for class StressTest.Test008" 
            if (typeof StressTest.Test089 != 'function') throw "Dependency StressTest.Test089 is not satisfied for class StressTest.Test008" 
            if (typeof StressTest.Test090 != 'function') throw "Dependency StressTest.Test090 is not satisfied for class StressTest.Test008" 
            if (typeof StressTest.Test094 != 'function') throw "Dependency StressTest.Test094 is not satisfied for class StressTest.Test008" 
            if (typeof StressTest.Test097 != 'function') throw "Dependency StressTest.Test097 is not satisfied for class StressTest.Test008" 
    }
})
