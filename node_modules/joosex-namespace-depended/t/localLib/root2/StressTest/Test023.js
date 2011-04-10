var declared = false
try {
    declared = typeof StressTest.Test023 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test023"


Class('StressTest.Test023', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test030',
           'StressTest.Test031',
           'StressTest.Test035',
           'StressTest.Test054',
           'StressTest.Test057',
           'StressTest.Test079',
           'StressTest.Test086',
           'StressTest.Test098'
    ],
    
    methods : {
        result : function () { return 23 }
    },
    
    body : function(){
            if (typeof StressTest.Test030 != 'function') throw "Dependency StressTest.Test030 is not satisfied for class StressTest.Test023" 
            if (typeof StressTest.Test031 != 'function') throw "Dependency StressTest.Test031 is not satisfied for class StressTest.Test023" 
            if (typeof StressTest.Test035 != 'function') throw "Dependency StressTest.Test035 is not satisfied for class StressTest.Test023" 
            if (typeof StressTest.Test054 != 'function') throw "Dependency StressTest.Test054 is not satisfied for class StressTest.Test023" 
            if (typeof StressTest.Test057 != 'function') throw "Dependency StressTest.Test057 is not satisfied for class StressTest.Test023" 
            if (typeof StressTest.Test079 != 'function') throw "Dependency StressTest.Test079 is not satisfied for class StressTest.Test023" 
            if (typeof StressTest.Test086 != 'function') throw "Dependency StressTest.Test086 is not satisfied for class StressTest.Test023" 
            if (typeof StressTest.Test098 != 'function') throw "Dependency StressTest.Test098 is not satisfied for class StressTest.Test023" 
    }
})
