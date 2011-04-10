var declared = false
try {
    declared = typeof StressTest.Test009 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test009"


Class('StressTest.Test009', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test012',
           'StressTest.Test022',
           'StressTest.Test040',
           'StressTest.Test051',
           'StressTest.Test061',
           'StressTest.Test064',
           'StressTest.Test068',
           'StressTest.Test077',
           'StressTest.Test090',
           'StressTest.Test092',
           'StressTest.Test099'
    ],
    
    methods : {
        result : function () { return 9 }
    },
    
    body : function(){
            if (typeof StressTest.Test012 != 'function') throw "Dependency StressTest.Test012 is not satisfied for class StressTest.Test009" 
            if (typeof StressTest.Test022 != 'function') throw "Dependency StressTest.Test022 is not satisfied for class StressTest.Test009" 
            if (typeof StressTest.Test040 != 'function') throw "Dependency StressTest.Test040 is not satisfied for class StressTest.Test009" 
            if (typeof StressTest.Test051 != 'function') throw "Dependency StressTest.Test051 is not satisfied for class StressTest.Test009" 
            if (typeof StressTest.Test061 != 'function') throw "Dependency StressTest.Test061 is not satisfied for class StressTest.Test009" 
            if (typeof StressTest.Test064 != 'function') throw "Dependency StressTest.Test064 is not satisfied for class StressTest.Test009" 
            if (typeof StressTest.Test068 != 'function') throw "Dependency StressTest.Test068 is not satisfied for class StressTest.Test009" 
            if (typeof StressTest.Test077 != 'function') throw "Dependency StressTest.Test077 is not satisfied for class StressTest.Test009" 
            if (typeof StressTest.Test090 != 'function') throw "Dependency StressTest.Test090 is not satisfied for class StressTest.Test009" 
            if (typeof StressTest.Test092 != 'function') throw "Dependency StressTest.Test092 is not satisfied for class StressTest.Test009" 
            if (typeof StressTest.Test099 != 'function') throw "Dependency StressTest.Test099 is not satisfied for class StressTest.Test009" 
    }
})
