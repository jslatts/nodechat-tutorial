var declared = false
try {
    declared = typeof StressTest.Test031 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test031"


Class('StressTest.Test031', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test032',
           'StressTest.Test033',
           'StressTest.Test037',
           'StressTest.Test038',
           'StressTest.Test043',
           'StressTest.Test045',
           'StressTest.Test052',
           'StressTest.Test070',
           'StressTest.Test075',
           'StressTest.Test078',
           'StressTest.Test086',
           'StressTest.Test094',
           'StressTest.Test098'
    ],
    
    methods : {
        result : function () { return 31 }
    },
    
    body : function(){
            if (typeof StressTest.Test032 != 'function') throw "Dependency StressTest.Test032 is not satisfied for class StressTest.Test031" 
            if (typeof StressTest.Test033 != 'function') throw "Dependency StressTest.Test033 is not satisfied for class StressTest.Test031" 
            if (typeof StressTest.Test037 != 'function') throw "Dependency StressTest.Test037 is not satisfied for class StressTest.Test031" 
            if (typeof StressTest.Test038 != 'function') throw "Dependency StressTest.Test038 is not satisfied for class StressTest.Test031" 
            if (typeof StressTest.Test043 != 'function') throw "Dependency StressTest.Test043 is not satisfied for class StressTest.Test031" 
            if (typeof StressTest.Test045 != 'function') throw "Dependency StressTest.Test045 is not satisfied for class StressTest.Test031" 
            if (typeof StressTest.Test052 != 'function') throw "Dependency StressTest.Test052 is not satisfied for class StressTest.Test031" 
            if (typeof StressTest.Test070 != 'function') throw "Dependency StressTest.Test070 is not satisfied for class StressTest.Test031" 
            if (typeof StressTest.Test075 != 'function') throw "Dependency StressTest.Test075 is not satisfied for class StressTest.Test031" 
            if (typeof StressTest.Test078 != 'function') throw "Dependency StressTest.Test078 is not satisfied for class StressTest.Test031" 
            if (typeof StressTest.Test086 != 'function') throw "Dependency StressTest.Test086 is not satisfied for class StressTest.Test031" 
            if (typeof StressTest.Test094 != 'function') throw "Dependency StressTest.Test094 is not satisfied for class StressTest.Test031" 
            if (typeof StressTest.Test098 != 'function') throw "Dependency StressTest.Test098 is not satisfied for class StressTest.Test031" 
    }
})
