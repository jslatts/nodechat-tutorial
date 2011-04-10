var declared = false
try {
    declared = typeof StressTest.Test072 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test072"


Class('StressTest.Test072', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test078',
           'StressTest.Test084',
           'StressTest.Test085',
           'StressTest.Test087',
           'StressTest.Test090',
           'StressTest.Test093',
           'StressTest.Test094',
           'StressTest.Test095',
           'StressTest.Test098'
    ],
    
    methods : {
        result : function () { return 72 }
    },
    
    body : function(){
            if (typeof StressTest.Test078 != 'function') throw "Dependency StressTest.Test078 is not satisfied for class StressTest.Test072" 
            if (typeof StressTest.Test084 != 'function') throw "Dependency StressTest.Test084 is not satisfied for class StressTest.Test072" 
            if (typeof StressTest.Test085 != 'function') throw "Dependency StressTest.Test085 is not satisfied for class StressTest.Test072" 
            if (typeof StressTest.Test087 != 'function') throw "Dependency StressTest.Test087 is not satisfied for class StressTest.Test072" 
            if (typeof StressTest.Test090 != 'function') throw "Dependency StressTest.Test090 is not satisfied for class StressTest.Test072" 
            if (typeof StressTest.Test093 != 'function') throw "Dependency StressTest.Test093 is not satisfied for class StressTest.Test072" 
            if (typeof StressTest.Test094 != 'function') throw "Dependency StressTest.Test094 is not satisfied for class StressTest.Test072" 
            if (typeof StressTest.Test095 != 'function') throw "Dependency StressTest.Test095 is not satisfied for class StressTest.Test072" 
            if (typeof StressTest.Test098 != 'function') throw "Dependency StressTest.Test098 is not satisfied for class StressTest.Test072" 
    }
})
