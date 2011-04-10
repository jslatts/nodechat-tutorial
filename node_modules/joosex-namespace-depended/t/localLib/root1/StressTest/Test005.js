var declared = false
try {
    declared = typeof StressTest.Test005 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test005"


Class('StressTest.Test005', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test011',
           'StressTest.Test020',
           'StressTest.Test021',
           'StressTest.Test035',
           'StressTest.Test042',
           'StressTest.Test054',
           'StressTest.Test059',
           'StressTest.Test061',
           'StressTest.Test062',
           'StressTest.Test088',
           'StressTest.Test093',
           'StressTest.Test095'
    ],
    
    methods : {
        result : function () { return 5 }
    },
    
    body : function(){
            if (typeof StressTest.Test011 != 'function') throw "Dependency StressTest.Test011 is not satisfied for class StressTest.Test005" 
            if (typeof StressTest.Test020 != 'function') throw "Dependency StressTest.Test020 is not satisfied for class StressTest.Test005" 
            if (typeof StressTest.Test021 != 'function') throw "Dependency StressTest.Test021 is not satisfied for class StressTest.Test005" 
            if (typeof StressTest.Test035 != 'function') throw "Dependency StressTest.Test035 is not satisfied for class StressTest.Test005" 
            if (typeof StressTest.Test042 != 'function') throw "Dependency StressTest.Test042 is not satisfied for class StressTest.Test005" 
            if (typeof StressTest.Test054 != 'function') throw "Dependency StressTest.Test054 is not satisfied for class StressTest.Test005" 
            if (typeof StressTest.Test059 != 'function') throw "Dependency StressTest.Test059 is not satisfied for class StressTest.Test005" 
            if (typeof StressTest.Test061 != 'function') throw "Dependency StressTest.Test061 is not satisfied for class StressTest.Test005" 
            if (typeof StressTest.Test062 != 'function') throw "Dependency StressTest.Test062 is not satisfied for class StressTest.Test005" 
            if (typeof StressTest.Test088 != 'function') throw "Dependency StressTest.Test088 is not satisfied for class StressTest.Test005" 
            if (typeof StressTest.Test093 != 'function') throw "Dependency StressTest.Test093 is not satisfied for class StressTest.Test005" 
            if (typeof StressTest.Test095 != 'function') throw "Dependency StressTest.Test095 is not satisfied for class StressTest.Test005" 
    }
})
