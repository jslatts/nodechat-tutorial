var declared = false
try {
    declared = typeof StressTest.Test084 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test084"


Class('StressTest.Test084', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test086',
           'StressTest.Test089',
           'StressTest.Test090',
           'StressTest.Test092',
           'StressTest.Test093',
           'StressTest.Test096',
           'StressTest.Test098',
           'StressTest.Test099'
    ],
    
    methods : {
        result : function () { return 84 }
    },
    
    body : function(){
            if (typeof StressTest.Test086 != 'function') throw "Dependency StressTest.Test086 is not satisfied for class StressTest.Test084" 
            if (typeof StressTest.Test089 != 'function') throw "Dependency StressTest.Test089 is not satisfied for class StressTest.Test084" 
            if (typeof StressTest.Test090 != 'function') throw "Dependency StressTest.Test090 is not satisfied for class StressTest.Test084" 
            if (typeof StressTest.Test092 != 'function') throw "Dependency StressTest.Test092 is not satisfied for class StressTest.Test084" 
            if (typeof StressTest.Test093 != 'function') throw "Dependency StressTest.Test093 is not satisfied for class StressTest.Test084" 
            if (typeof StressTest.Test096 != 'function') throw "Dependency StressTest.Test096 is not satisfied for class StressTest.Test084" 
            if (typeof StressTest.Test098 != 'function') throw "Dependency StressTest.Test098 is not satisfied for class StressTest.Test084" 
            if (typeof StressTest.Test099 != 'function') throw "Dependency StressTest.Test099 is not satisfied for class StressTest.Test084" 
    }
})
