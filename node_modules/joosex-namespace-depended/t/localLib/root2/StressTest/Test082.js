var declared = false
try {
    declared = typeof StressTest.Test082 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test082"


Class('StressTest.Test082', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test084',
           'StressTest.Test085',
           'StressTest.Test086',
           'StressTest.Test087',
           'StressTest.Test088',
           'StressTest.Test089',
           'StressTest.Test091',
           'StressTest.Test092',
           'StressTest.Test093',
           'StressTest.Test094',
           'StressTest.Test097',
           'StressTest.Test098'
    ],
    
    methods : {
        result : function () { return 82 }
    },
    
    body : function(){
            if (typeof StressTest.Test084 != 'function') throw "Dependency StressTest.Test084 is not satisfied for class StressTest.Test082" 
            if (typeof StressTest.Test085 != 'function') throw "Dependency StressTest.Test085 is not satisfied for class StressTest.Test082" 
            if (typeof StressTest.Test086 != 'function') throw "Dependency StressTest.Test086 is not satisfied for class StressTest.Test082" 
            if (typeof StressTest.Test087 != 'function') throw "Dependency StressTest.Test087 is not satisfied for class StressTest.Test082" 
            if (typeof StressTest.Test088 != 'function') throw "Dependency StressTest.Test088 is not satisfied for class StressTest.Test082" 
            if (typeof StressTest.Test089 != 'function') throw "Dependency StressTest.Test089 is not satisfied for class StressTest.Test082" 
            if (typeof StressTest.Test091 != 'function') throw "Dependency StressTest.Test091 is not satisfied for class StressTest.Test082" 
            if (typeof StressTest.Test092 != 'function') throw "Dependency StressTest.Test092 is not satisfied for class StressTest.Test082" 
            if (typeof StressTest.Test093 != 'function') throw "Dependency StressTest.Test093 is not satisfied for class StressTest.Test082" 
            if (typeof StressTest.Test094 != 'function') throw "Dependency StressTest.Test094 is not satisfied for class StressTest.Test082" 
            if (typeof StressTest.Test097 != 'function') throw "Dependency StressTest.Test097 is not satisfied for class StressTest.Test082" 
            if (typeof StressTest.Test098 != 'function') throw "Dependency StressTest.Test098 is not satisfied for class StressTest.Test082" 
    }
})
