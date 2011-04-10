var declared = false
try {
    declared = typeof StressTest.Test021 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test021"


Class('StressTest.Test021', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test040',
           'StressTest.Test041',
           'StressTest.Test046',
           'StressTest.Test049',
           'StressTest.Test052',
           'StressTest.Test055',
           'StressTest.Test057',
           'StressTest.Test060',
           'StressTest.Test065',
           'StressTest.Test092'
    ],
    
    methods : {
        result : function () { return 21 }
    },
    
    body : function(){
            if (typeof StressTest.Test040 != 'function') throw "Dependency StressTest.Test040 is not satisfied for class StressTest.Test021" 
            if (typeof StressTest.Test041 != 'function') throw "Dependency StressTest.Test041 is not satisfied for class StressTest.Test021" 
            if (typeof StressTest.Test046 != 'function') throw "Dependency StressTest.Test046 is not satisfied for class StressTest.Test021" 
            if (typeof StressTest.Test049 != 'function') throw "Dependency StressTest.Test049 is not satisfied for class StressTest.Test021" 
            if (typeof StressTest.Test052 != 'function') throw "Dependency StressTest.Test052 is not satisfied for class StressTest.Test021" 
            if (typeof StressTest.Test055 != 'function') throw "Dependency StressTest.Test055 is not satisfied for class StressTest.Test021" 
            if (typeof StressTest.Test057 != 'function') throw "Dependency StressTest.Test057 is not satisfied for class StressTest.Test021" 
            if (typeof StressTest.Test060 != 'function') throw "Dependency StressTest.Test060 is not satisfied for class StressTest.Test021" 
            if (typeof StressTest.Test065 != 'function') throw "Dependency StressTest.Test065 is not satisfied for class StressTest.Test021" 
            if (typeof StressTest.Test092 != 'function') throw "Dependency StressTest.Test092 is not satisfied for class StressTest.Test021" 
    }
})
