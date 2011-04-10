var declared = false
try {
    declared = typeof StressTest.Test033 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test033"


Class('StressTest.Test033', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test038',
           'StressTest.Test055',
           'StressTest.Test069',
           'StressTest.Test071',
           'StressTest.Test073',
           'StressTest.Test074',
           'StressTest.Test080',
           'StressTest.Test081',
           'StressTest.Test085',
           'StressTest.Test089',
           'StressTest.Test092'
    ],
    
    methods : {
        result : function () { return 33 }
    },
    
    body : function(){
            if (typeof StressTest.Test038 != 'function') throw "Dependency StressTest.Test038 is not satisfied for class StressTest.Test033" 
            if (typeof StressTest.Test055 != 'function') throw "Dependency StressTest.Test055 is not satisfied for class StressTest.Test033" 
            if (typeof StressTest.Test069 != 'function') throw "Dependency StressTest.Test069 is not satisfied for class StressTest.Test033" 
            if (typeof StressTest.Test071 != 'function') throw "Dependency StressTest.Test071 is not satisfied for class StressTest.Test033" 
            if (typeof StressTest.Test073 != 'function') throw "Dependency StressTest.Test073 is not satisfied for class StressTest.Test033" 
            if (typeof StressTest.Test074 != 'function') throw "Dependency StressTest.Test074 is not satisfied for class StressTest.Test033" 
            if (typeof StressTest.Test080 != 'function') throw "Dependency StressTest.Test080 is not satisfied for class StressTest.Test033" 
            if (typeof StressTest.Test081 != 'function') throw "Dependency StressTest.Test081 is not satisfied for class StressTest.Test033" 
            if (typeof StressTest.Test085 != 'function') throw "Dependency StressTest.Test085 is not satisfied for class StressTest.Test033" 
            if (typeof StressTest.Test089 != 'function') throw "Dependency StressTest.Test089 is not satisfied for class StressTest.Test033" 
            if (typeof StressTest.Test092 != 'function') throw "Dependency StressTest.Test092 is not satisfied for class StressTest.Test033" 
    }
})
