var declared = false
try {
    declared = typeof StressTest.Test061 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test061"


Class('StressTest.Test061', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test064',
           'StressTest.Test070',
           'StressTest.Test073',
           'StressTest.Test074',
           'StressTest.Test075',
           'StressTest.Test077',
           'StressTest.Test083',
           'StressTest.Test088',
           'StressTest.Test095',
           'StressTest.Test099',
           'StressTest.Test100'
    ],
    
    methods : {
        result : function () { return 61 }
    },
    
    body : function(){
            if (typeof StressTest.Test064 != 'function') throw "Dependency StressTest.Test064 is not satisfied for class StressTest.Test061" 
            if (typeof StressTest.Test070 != 'function') throw "Dependency StressTest.Test070 is not satisfied for class StressTest.Test061" 
            if (typeof StressTest.Test073 != 'function') throw "Dependency StressTest.Test073 is not satisfied for class StressTest.Test061" 
            if (typeof StressTest.Test074 != 'function') throw "Dependency StressTest.Test074 is not satisfied for class StressTest.Test061" 
            if (typeof StressTest.Test075 != 'function') throw "Dependency StressTest.Test075 is not satisfied for class StressTest.Test061" 
            if (typeof StressTest.Test077 != 'function') throw "Dependency StressTest.Test077 is not satisfied for class StressTest.Test061" 
            if (typeof StressTest.Test083 != 'function') throw "Dependency StressTest.Test083 is not satisfied for class StressTest.Test061" 
            if (typeof StressTest.Test088 != 'function') throw "Dependency StressTest.Test088 is not satisfied for class StressTest.Test061" 
            if (typeof StressTest.Test095 != 'function') throw "Dependency StressTest.Test095 is not satisfied for class StressTest.Test061" 
            if (typeof StressTest.Test099 != 'function') throw "Dependency StressTest.Test099 is not satisfied for class StressTest.Test061" 
            if (typeof StressTest.Test100 != 'function') throw "Dependency StressTest.Test100 is not satisfied for class StressTest.Test061" 
    }
})
