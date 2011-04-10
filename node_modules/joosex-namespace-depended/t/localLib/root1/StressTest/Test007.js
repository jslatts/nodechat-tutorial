var declared = false
try {
    declared = typeof StressTest.Test007 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test007"


Class('StressTest.Test007', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test009',
           'StressTest.Test015',
           'StressTest.Test016',
           'StressTest.Test023',
           'StressTest.Test033',
           'StressTest.Test038',
           'StressTest.Test046',
           'StressTest.Test048',
           'StressTest.Test056',
           'StressTest.Test060',
           'StressTest.Test062',
           'StressTest.Test065',
           'StressTest.Test074',
           'StressTest.Test080',
           'StressTest.Test086',
           'StressTest.Test091',
           'StressTest.Test099',
           'StressTest.Test100'
    ],
    
    methods : {
        result : function () { return 7 }
    },
    
    body : function(){
            if (typeof StressTest.Test009 != 'function') throw "Dependency StressTest.Test009 is not satisfied for class StressTest.Test007" 
            if (typeof StressTest.Test015 != 'function') throw "Dependency StressTest.Test015 is not satisfied for class StressTest.Test007" 
            if (typeof StressTest.Test016 != 'function') throw "Dependency StressTest.Test016 is not satisfied for class StressTest.Test007" 
            if (typeof StressTest.Test023 != 'function') throw "Dependency StressTest.Test023 is not satisfied for class StressTest.Test007" 
            if (typeof StressTest.Test033 != 'function') throw "Dependency StressTest.Test033 is not satisfied for class StressTest.Test007" 
            if (typeof StressTest.Test038 != 'function') throw "Dependency StressTest.Test038 is not satisfied for class StressTest.Test007" 
            if (typeof StressTest.Test046 != 'function') throw "Dependency StressTest.Test046 is not satisfied for class StressTest.Test007" 
            if (typeof StressTest.Test048 != 'function') throw "Dependency StressTest.Test048 is not satisfied for class StressTest.Test007" 
            if (typeof StressTest.Test056 != 'function') throw "Dependency StressTest.Test056 is not satisfied for class StressTest.Test007" 
            if (typeof StressTest.Test060 != 'function') throw "Dependency StressTest.Test060 is not satisfied for class StressTest.Test007" 
            if (typeof StressTest.Test062 != 'function') throw "Dependency StressTest.Test062 is not satisfied for class StressTest.Test007" 
            if (typeof StressTest.Test065 != 'function') throw "Dependency StressTest.Test065 is not satisfied for class StressTest.Test007" 
            if (typeof StressTest.Test074 != 'function') throw "Dependency StressTest.Test074 is not satisfied for class StressTest.Test007" 
            if (typeof StressTest.Test080 != 'function') throw "Dependency StressTest.Test080 is not satisfied for class StressTest.Test007" 
            if (typeof StressTest.Test086 != 'function') throw "Dependency StressTest.Test086 is not satisfied for class StressTest.Test007" 
            if (typeof StressTest.Test091 != 'function') throw "Dependency StressTest.Test091 is not satisfied for class StressTest.Test007" 
            if (typeof StressTest.Test099 != 'function') throw "Dependency StressTest.Test099 is not satisfied for class StressTest.Test007" 
            if (typeof StressTest.Test100 != 'function') throw "Dependency StressTest.Test100 is not satisfied for class StressTest.Test007" 
    }
})
