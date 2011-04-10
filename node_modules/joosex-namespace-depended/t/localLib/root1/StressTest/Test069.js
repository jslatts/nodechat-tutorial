var declared = false
try {
    declared = typeof StressTest.Test069 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test069"


Class('StressTest.Test069', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test070',
           'StressTest.Test071',
           'StressTest.Test072',
           'StressTest.Test076',
           'StressTest.Test077',
           'StressTest.Test083',
           'StressTest.Test086',
           'StressTest.Test088',
           'StressTest.Test089',
           'StressTest.Test094',
           'StressTest.Test097'
    ],
    
    methods : {
        result : function () { return 69 }
    },
    
    body : function(){
            if (typeof StressTest.Test070 != 'function') throw "Dependency StressTest.Test070 is not satisfied for class StressTest.Test069" 
            if (typeof StressTest.Test071 != 'function') throw "Dependency StressTest.Test071 is not satisfied for class StressTest.Test069" 
            if (typeof StressTest.Test072 != 'function') throw "Dependency StressTest.Test072 is not satisfied for class StressTest.Test069" 
            if (typeof StressTest.Test076 != 'function') throw "Dependency StressTest.Test076 is not satisfied for class StressTest.Test069" 
            if (typeof StressTest.Test077 != 'function') throw "Dependency StressTest.Test077 is not satisfied for class StressTest.Test069" 
            if (typeof StressTest.Test083 != 'function') throw "Dependency StressTest.Test083 is not satisfied for class StressTest.Test069" 
            if (typeof StressTest.Test086 != 'function') throw "Dependency StressTest.Test086 is not satisfied for class StressTest.Test069" 
            if (typeof StressTest.Test088 != 'function') throw "Dependency StressTest.Test088 is not satisfied for class StressTest.Test069" 
            if (typeof StressTest.Test089 != 'function') throw "Dependency StressTest.Test089 is not satisfied for class StressTest.Test069" 
            if (typeof StressTest.Test094 != 'function') throw "Dependency StressTest.Test094 is not satisfied for class StressTest.Test069" 
            if (typeof StressTest.Test097 != 'function') throw "Dependency StressTest.Test097 is not satisfied for class StressTest.Test069" 
    }
})
