var declared = false
try {
    declared = typeof StressTest.Test041 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test041"


Class('StressTest.Test041', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test042',
           'StressTest.Test046',
           'StressTest.Test049',
           'StressTest.Test051',
           'StressTest.Test056',
           'StressTest.Test057',
           'StressTest.Test067',
           'StressTest.Test072',
           'StressTest.Test081',
           'StressTest.Test088'
    ],
    
    methods : {
        result : function () { return 41 }
    },
    
    body : function(){
            if (typeof StressTest.Test042 != 'function') throw "Dependency StressTest.Test042 is not satisfied for class StressTest.Test041" 
            if (typeof StressTest.Test046 != 'function') throw "Dependency StressTest.Test046 is not satisfied for class StressTest.Test041" 
            if (typeof StressTest.Test049 != 'function') throw "Dependency StressTest.Test049 is not satisfied for class StressTest.Test041" 
            if (typeof StressTest.Test051 != 'function') throw "Dependency StressTest.Test051 is not satisfied for class StressTest.Test041" 
            if (typeof StressTest.Test056 != 'function') throw "Dependency StressTest.Test056 is not satisfied for class StressTest.Test041" 
            if (typeof StressTest.Test057 != 'function') throw "Dependency StressTest.Test057 is not satisfied for class StressTest.Test041" 
            if (typeof StressTest.Test067 != 'function') throw "Dependency StressTest.Test067 is not satisfied for class StressTest.Test041" 
            if (typeof StressTest.Test072 != 'function') throw "Dependency StressTest.Test072 is not satisfied for class StressTest.Test041" 
            if (typeof StressTest.Test081 != 'function') throw "Dependency StressTest.Test081 is not satisfied for class StressTest.Test041" 
            if (typeof StressTest.Test088 != 'function') throw "Dependency StressTest.Test088 is not satisfied for class StressTest.Test041" 
    }
})
