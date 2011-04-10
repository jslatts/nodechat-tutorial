var declared = false
try {
    declared = typeof StressTest.Test074 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test074"


Class('StressTest.Test074', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test077',
           'StressTest.Test081',
           'StressTest.Test082',
           'StressTest.Test084',
           'StressTest.Test093',
           'StressTest.Test097'
    ],
    
    methods : {
        result : function () { return 74 }
    },
    
    body : function(){
            if (typeof StressTest.Test077 != 'function') throw "Dependency StressTest.Test077 is not satisfied for class StressTest.Test074" 
            if (typeof StressTest.Test081 != 'function') throw "Dependency StressTest.Test081 is not satisfied for class StressTest.Test074" 
            if (typeof StressTest.Test082 != 'function') throw "Dependency StressTest.Test082 is not satisfied for class StressTest.Test074" 
            if (typeof StressTest.Test084 != 'function') throw "Dependency StressTest.Test084 is not satisfied for class StressTest.Test074" 
            if (typeof StressTest.Test093 != 'function') throw "Dependency StressTest.Test093 is not satisfied for class StressTest.Test074" 
            if (typeof StressTest.Test097 != 'function') throw "Dependency StressTest.Test097 is not satisfied for class StressTest.Test074" 
    }
})
