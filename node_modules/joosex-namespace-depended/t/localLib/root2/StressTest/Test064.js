var declared = false
try {
    declared = typeof StressTest.Test064 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test064"


Class('StressTest.Test064', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test067',
           'StressTest.Test070',
           'StressTest.Test072',
           'StressTest.Test074',
           'StressTest.Test076',
           'StressTest.Test078',
           'StressTest.Test083',
           'StressTest.Test085',
           'StressTest.Test093',
           'StressTest.Test096'
    ],
    
    methods : {
        result : function () { return 64 }
    },
    
    body : function(){
            if (typeof StressTest.Test067 != 'function') throw "Dependency StressTest.Test067 is not satisfied for class StressTest.Test064" 
            if (typeof StressTest.Test070 != 'function') throw "Dependency StressTest.Test070 is not satisfied for class StressTest.Test064" 
            if (typeof StressTest.Test072 != 'function') throw "Dependency StressTest.Test072 is not satisfied for class StressTest.Test064" 
            if (typeof StressTest.Test074 != 'function') throw "Dependency StressTest.Test074 is not satisfied for class StressTest.Test064" 
            if (typeof StressTest.Test076 != 'function') throw "Dependency StressTest.Test076 is not satisfied for class StressTest.Test064" 
            if (typeof StressTest.Test078 != 'function') throw "Dependency StressTest.Test078 is not satisfied for class StressTest.Test064" 
            if (typeof StressTest.Test083 != 'function') throw "Dependency StressTest.Test083 is not satisfied for class StressTest.Test064" 
            if (typeof StressTest.Test085 != 'function') throw "Dependency StressTest.Test085 is not satisfied for class StressTest.Test064" 
            if (typeof StressTest.Test093 != 'function') throw "Dependency StressTest.Test093 is not satisfied for class StressTest.Test064" 
            if (typeof StressTest.Test096 != 'function') throw "Dependency StressTest.Test096 is not satisfied for class StressTest.Test064" 
    }
})
