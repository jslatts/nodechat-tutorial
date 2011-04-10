var declared = false
try {
    declared = typeof StressTest.Test004 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test004"


Class('StressTest.Test004', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test005',
           'StressTest.Test012',
           'StressTest.Test017',
           'StressTest.Test022',
           'StressTest.Test038',
           'StressTest.Test046',
           'StressTest.Test052',
           'StressTest.Test053',
           'StressTest.Test057',
           'StressTest.Test058',
           'StressTest.Test060',
           'StressTest.Test062',
           'StressTest.Test078',
           'StressTest.Test082',
           'StressTest.Test094'
    ],
    
    methods : {
        result : function () { return 4 }
    },
    
    body : function(){
            if (typeof StressTest.Test005 != 'function') throw "Dependency StressTest.Test005 is not satisfied for class StressTest.Test004" 
            if (typeof StressTest.Test012 != 'function') throw "Dependency StressTest.Test012 is not satisfied for class StressTest.Test004" 
            if (typeof StressTest.Test017 != 'function') throw "Dependency StressTest.Test017 is not satisfied for class StressTest.Test004" 
            if (typeof StressTest.Test022 != 'function') throw "Dependency StressTest.Test022 is not satisfied for class StressTest.Test004" 
            if (typeof StressTest.Test038 != 'function') throw "Dependency StressTest.Test038 is not satisfied for class StressTest.Test004" 
            if (typeof StressTest.Test046 != 'function') throw "Dependency StressTest.Test046 is not satisfied for class StressTest.Test004" 
            if (typeof StressTest.Test052 != 'function') throw "Dependency StressTest.Test052 is not satisfied for class StressTest.Test004" 
            if (typeof StressTest.Test053 != 'function') throw "Dependency StressTest.Test053 is not satisfied for class StressTest.Test004" 
            if (typeof StressTest.Test057 != 'function') throw "Dependency StressTest.Test057 is not satisfied for class StressTest.Test004" 
            if (typeof StressTest.Test058 != 'function') throw "Dependency StressTest.Test058 is not satisfied for class StressTest.Test004" 
            if (typeof StressTest.Test060 != 'function') throw "Dependency StressTest.Test060 is not satisfied for class StressTest.Test004" 
            if (typeof StressTest.Test062 != 'function') throw "Dependency StressTest.Test062 is not satisfied for class StressTest.Test004" 
            if (typeof StressTest.Test078 != 'function') throw "Dependency StressTest.Test078 is not satisfied for class StressTest.Test004" 
            if (typeof StressTest.Test082 != 'function') throw "Dependency StressTest.Test082 is not satisfied for class StressTest.Test004" 
            if (typeof StressTest.Test094 != 'function') throw "Dependency StressTest.Test094 is not satisfied for class StressTest.Test004" 
    }
})
