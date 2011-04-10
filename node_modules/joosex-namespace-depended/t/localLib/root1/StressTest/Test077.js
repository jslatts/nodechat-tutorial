var declared = false
try {
    declared = typeof StressTest.Test077 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test077"


Class('StressTest.Test077', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test080',
           'StressTest.Test081',
           'StressTest.Test083',
           'StressTest.Test084',
           'StressTest.Test085',
           'StressTest.Test086',
           'StressTest.Test087',
           'StressTest.Test094',
           'StressTest.Test095'
    ],
    
    methods : {
        result : function () { return 77 }
    },
    
    body : function(){
            if (typeof StressTest.Test080 != 'function') throw "Dependency StressTest.Test080 is not satisfied for class StressTest.Test077" 
            if (typeof StressTest.Test081 != 'function') throw "Dependency StressTest.Test081 is not satisfied for class StressTest.Test077" 
            if (typeof StressTest.Test083 != 'function') throw "Dependency StressTest.Test083 is not satisfied for class StressTest.Test077" 
            if (typeof StressTest.Test084 != 'function') throw "Dependency StressTest.Test084 is not satisfied for class StressTest.Test077" 
            if (typeof StressTest.Test085 != 'function') throw "Dependency StressTest.Test085 is not satisfied for class StressTest.Test077" 
            if (typeof StressTest.Test086 != 'function') throw "Dependency StressTest.Test086 is not satisfied for class StressTest.Test077" 
            if (typeof StressTest.Test087 != 'function') throw "Dependency StressTest.Test087 is not satisfied for class StressTest.Test077" 
            if (typeof StressTest.Test094 != 'function') throw "Dependency StressTest.Test094 is not satisfied for class StressTest.Test077" 
            if (typeof StressTest.Test095 != 'function') throw "Dependency StressTest.Test095 is not satisfied for class StressTest.Test077" 
    }
})
