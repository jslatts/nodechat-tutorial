var declared = false
try {
    declared = typeof StressTest.Test002 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test002"


Class('StressTest.Test002', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test020',
           'StressTest.Test030',
           'StressTest.Test031',
           'StressTest.Test033',
           'StressTest.Test036',
           'StressTest.Test038',
           'StressTest.Test072',
           'StressTest.Test082',
           'StressTest.Test098'
    ],
    
    methods : {
        result : function () { return 2 }
    },
    
    body : function(){
            if (typeof StressTest.Test020 != 'function') throw "Dependency StressTest.Test020 is not satisfied for class StressTest.Test002" 
            if (typeof StressTest.Test030 != 'function') throw "Dependency StressTest.Test030 is not satisfied for class StressTest.Test002" 
            if (typeof StressTest.Test031 != 'function') throw "Dependency StressTest.Test031 is not satisfied for class StressTest.Test002" 
            if (typeof StressTest.Test033 != 'function') throw "Dependency StressTest.Test033 is not satisfied for class StressTest.Test002" 
            if (typeof StressTest.Test036 != 'function') throw "Dependency StressTest.Test036 is not satisfied for class StressTest.Test002" 
            if (typeof StressTest.Test038 != 'function') throw "Dependency StressTest.Test038 is not satisfied for class StressTest.Test002" 
            if (typeof StressTest.Test072 != 'function') throw "Dependency StressTest.Test072 is not satisfied for class StressTest.Test002" 
            if (typeof StressTest.Test082 != 'function') throw "Dependency StressTest.Test082 is not satisfied for class StressTest.Test002" 
            if (typeof StressTest.Test098 != 'function') throw "Dependency StressTest.Test098 is not satisfied for class StressTest.Test002" 
    }
})
