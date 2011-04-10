var declared = false
try {
    declared = typeof StressTest.Test037 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test037"


Class('StressTest.Test037', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test047',
           'StressTest.Test049',
           'StressTest.Test054',
           'StressTest.Test064',
           'StressTest.Test067',
           'StressTest.Test077',
           'StressTest.Test089',
           'StressTest.Test093'
    ],
    
    methods : {
        result : function () { return 37 }
    },
    
    body : function(){
            if (typeof StressTest.Test047 != 'function') throw "Dependency StressTest.Test047 is not satisfied for class StressTest.Test037" 
            if (typeof StressTest.Test049 != 'function') throw "Dependency StressTest.Test049 is not satisfied for class StressTest.Test037" 
            if (typeof StressTest.Test054 != 'function') throw "Dependency StressTest.Test054 is not satisfied for class StressTest.Test037" 
            if (typeof StressTest.Test064 != 'function') throw "Dependency StressTest.Test064 is not satisfied for class StressTest.Test037" 
            if (typeof StressTest.Test067 != 'function') throw "Dependency StressTest.Test067 is not satisfied for class StressTest.Test037" 
            if (typeof StressTest.Test077 != 'function') throw "Dependency StressTest.Test077 is not satisfied for class StressTest.Test037" 
            if (typeof StressTest.Test089 != 'function') throw "Dependency StressTest.Test089 is not satisfied for class StressTest.Test037" 
            if (typeof StressTest.Test093 != 'function') throw "Dependency StressTest.Test093 is not satisfied for class StressTest.Test037" 
    }
})
