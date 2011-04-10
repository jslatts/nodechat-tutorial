var declared = false
try {
    declared = typeof StressTest.Test060 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test060"


Class('StressTest.Test060', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test062',
           'StressTest.Test067',
           'StressTest.Test069',
           'StressTest.Test070',
           'StressTest.Test071',
           'StressTest.Test072',
           'StressTest.Test077',
           'StressTest.Test078',
           'StressTest.Test088',
           'StressTest.Test089',
           'StressTest.Test090',
           'StressTest.Test098'
    ],
    
    methods : {
        result : function () { return 60 }
    },
    
    body : function(){
            if (typeof StressTest.Test062 != 'function') throw "Dependency StressTest.Test062 is not satisfied for class StressTest.Test060" 
            if (typeof StressTest.Test067 != 'function') throw "Dependency StressTest.Test067 is not satisfied for class StressTest.Test060" 
            if (typeof StressTest.Test069 != 'function') throw "Dependency StressTest.Test069 is not satisfied for class StressTest.Test060" 
            if (typeof StressTest.Test070 != 'function') throw "Dependency StressTest.Test070 is not satisfied for class StressTest.Test060" 
            if (typeof StressTest.Test071 != 'function') throw "Dependency StressTest.Test071 is not satisfied for class StressTest.Test060" 
            if (typeof StressTest.Test072 != 'function') throw "Dependency StressTest.Test072 is not satisfied for class StressTest.Test060" 
            if (typeof StressTest.Test077 != 'function') throw "Dependency StressTest.Test077 is not satisfied for class StressTest.Test060" 
            if (typeof StressTest.Test078 != 'function') throw "Dependency StressTest.Test078 is not satisfied for class StressTest.Test060" 
            if (typeof StressTest.Test088 != 'function') throw "Dependency StressTest.Test088 is not satisfied for class StressTest.Test060" 
            if (typeof StressTest.Test089 != 'function') throw "Dependency StressTest.Test089 is not satisfied for class StressTest.Test060" 
            if (typeof StressTest.Test090 != 'function') throw "Dependency StressTest.Test090 is not satisfied for class StressTest.Test060" 
            if (typeof StressTest.Test098 != 'function') throw "Dependency StressTest.Test098 is not satisfied for class StressTest.Test060" 
    }
})
