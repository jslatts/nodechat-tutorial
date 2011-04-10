var declared = false
try {
    declared = typeof StressTest.Test024 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test024"


Class('StressTest.Test024', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test028',
           'StressTest.Test033',
           'StressTest.Test036',
           'StressTest.Test040',
           'StressTest.Test041',
           'StressTest.Test042',
           'StressTest.Test045',
           'StressTest.Test055',
           'StressTest.Test057',
           'StressTest.Test065',
           'StressTest.Test085',
           'StressTest.Test089',
           'StressTest.Test096'
    ],
    
    methods : {
        result : function () { return 24 }
    },
    
    body : function(){
            if (typeof StressTest.Test028 != 'function') throw "Dependency StressTest.Test028 is not satisfied for class StressTest.Test024" 
            if (typeof StressTest.Test033 != 'function') throw "Dependency StressTest.Test033 is not satisfied for class StressTest.Test024" 
            if (typeof StressTest.Test036 != 'function') throw "Dependency StressTest.Test036 is not satisfied for class StressTest.Test024" 
            if (typeof StressTest.Test040 != 'function') throw "Dependency StressTest.Test040 is not satisfied for class StressTest.Test024" 
            if (typeof StressTest.Test041 != 'function') throw "Dependency StressTest.Test041 is not satisfied for class StressTest.Test024" 
            if (typeof StressTest.Test042 != 'function') throw "Dependency StressTest.Test042 is not satisfied for class StressTest.Test024" 
            if (typeof StressTest.Test045 != 'function') throw "Dependency StressTest.Test045 is not satisfied for class StressTest.Test024" 
            if (typeof StressTest.Test055 != 'function') throw "Dependency StressTest.Test055 is not satisfied for class StressTest.Test024" 
            if (typeof StressTest.Test057 != 'function') throw "Dependency StressTest.Test057 is not satisfied for class StressTest.Test024" 
            if (typeof StressTest.Test065 != 'function') throw "Dependency StressTest.Test065 is not satisfied for class StressTest.Test024" 
            if (typeof StressTest.Test085 != 'function') throw "Dependency StressTest.Test085 is not satisfied for class StressTest.Test024" 
            if (typeof StressTest.Test089 != 'function') throw "Dependency StressTest.Test089 is not satisfied for class StressTest.Test024" 
            if (typeof StressTest.Test096 != 'function') throw "Dependency StressTest.Test096 is not satisfied for class StressTest.Test024" 
    }
})
