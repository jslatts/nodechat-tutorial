var declared = false
try {
    declared = typeof StressTest.Test063 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test063"


Class('StressTest.Test063', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test064',
           'StressTest.Test066',
           'StressTest.Test072',
           'StressTest.Test075',
           'StressTest.Test079',
           'StressTest.Test086',
           'StressTest.Test087',
           'StressTest.Test091',
           'StressTest.Test092',
           'StressTest.Test093',
           'StressTest.Test094',
           'StressTest.Test097'
    ],
    
    methods : {
        result : function () { return 63 }
    },
    
    body : function(){
            if (typeof StressTest.Test064 != 'function') throw "Dependency StressTest.Test064 is not satisfied for class StressTest.Test063" 
            if (typeof StressTest.Test066 != 'function') throw "Dependency StressTest.Test066 is not satisfied for class StressTest.Test063" 
            if (typeof StressTest.Test072 != 'function') throw "Dependency StressTest.Test072 is not satisfied for class StressTest.Test063" 
            if (typeof StressTest.Test075 != 'function') throw "Dependency StressTest.Test075 is not satisfied for class StressTest.Test063" 
            if (typeof StressTest.Test079 != 'function') throw "Dependency StressTest.Test079 is not satisfied for class StressTest.Test063" 
            if (typeof StressTest.Test086 != 'function') throw "Dependency StressTest.Test086 is not satisfied for class StressTest.Test063" 
            if (typeof StressTest.Test087 != 'function') throw "Dependency StressTest.Test087 is not satisfied for class StressTest.Test063" 
            if (typeof StressTest.Test091 != 'function') throw "Dependency StressTest.Test091 is not satisfied for class StressTest.Test063" 
            if (typeof StressTest.Test092 != 'function') throw "Dependency StressTest.Test092 is not satisfied for class StressTest.Test063" 
            if (typeof StressTest.Test093 != 'function') throw "Dependency StressTest.Test093 is not satisfied for class StressTest.Test063" 
            if (typeof StressTest.Test094 != 'function') throw "Dependency StressTest.Test094 is not satisfied for class StressTest.Test063" 
            if (typeof StressTest.Test097 != 'function') throw "Dependency StressTest.Test097 is not satisfied for class StressTest.Test063" 
    }
})
