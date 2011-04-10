var declared = false
try {
    declared = typeof StressTest.Test080 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test080"


Class('StressTest.Test080', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test081',
           'StressTest.Test082',
           'StressTest.Test085',
           'StressTest.Test086',
           'StressTest.Test088',
           'StressTest.Test089',
           'StressTest.Test093',
           'StressTest.Test095',
           'StressTest.Test098'
    ],
    
    methods : {
        result : function () { return 80 }
    },
    
    body : function(){
            if (typeof StressTest.Test081 != 'function') throw "Dependency StressTest.Test081 is not satisfied for class StressTest.Test080" 
            if (typeof StressTest.Test082 != 'function') throw "Dependency StressTest.Test082 is not satisfied for class StressTest.Test080" 
            if (typeof StressTest.Test085 != 'function') throw "Dependency StressTest.Test085 is not satisfied for class StressTest.Test080" 
            if (typeof StressTest.Test086 != 'function') throw "Dependency StressTest.Test086 is not satisfied for class StressTest.Test080" 
            if (typeof StressTest.Test088 != 'function') throw "Dependency StressTest.Test088 is not satisfied for class StressTest.Test080" 
            if (typeof StressTest.Test089 != 'function') throw "Dependency StressTest.Test089 is not satisfied for class StressTest.Test080" 
            if (typeof StressTest.Test093 != 'function') throw "Dependency StressTest.Test093 is not satisfied for class StressTest.Test080" 
            if (typeof StressTest.Test095 != 'function') throw "Dependency StressTest.Test095 is not satisfied for class StressTest.Test080" 
            if (typeof StressTest.Test098 != 'function') throw "Dependency StressTest.Test098 is not satisfied for class StressTest.Test080" 
    }
})
