var declared = false
try {
    declared = typeof StressTest.Test014 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test014"


Class('StressTest.Test014', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test017',
           'StressTest.Test019',
           'StressTest.Test024',
           'StressTest.Test026',
           'StressTest.Test028',
           'StressTest.Test029',
           'StressTest.Test036',
           'StressTest.Test038',
           'StressTest.Test050',
           'StressTest.Test053',
           'StressTest.Test058',
           'StressTest.Test069',
           'StressTest.Test079',
           'StressTest.Test086',
           'StressTest.Test087',
           'StressTest.Test089'
    ],
    
    methods : {
        result : function () { return 14 }
    },
    
    body : function(){
            if (typeof StressTest.Test017 != 'function') throw "Dependency StressTest.Test017 is not satisfied for class StressTest.Test014" 
            if (typeof StressTest.Test019 != 'function') throw "Dependency StressTest.Test019 is not satisfied for class StressTest.Test014" 
            if (typeof StressTest.Test024 != 'function') throw "Dependency StressTest.Test024 is not satisfied for class StressTest.Test014" 
            if (typeof StressTest.Test026 != 'function') throw "Dependency StressTest.Test026 is not satisfied for class StressTest.Test014" 
            if (typeof StressTest.Test028 != 'function') throw "Dependency StressTest.Test028 is not satisfied for class StressTest.Test014" 
            if (typeof StressTest.Test029 != 'function') throw "Dependency StressTest.Test029 is not satisfied for class StressTest.Test014" 
            if (typeof StressTest.Test036 != 'function') throw "Dependency StressTest.Test036 is not satisfied for class StressTest.Test014" 
            if (typeof StressTest.Test038 != 'function') throw "Dependency StressTest.Test038 is not satisfied for class StressTest.Test014" 
            if (typeof StressTest.Test050 != 'function') throw "Dependency StressTest.Test050 is not satisfied for class StressTest.Test014" 
            if (typeof StressTest.Test053 != 'function') throw "Dependency StressTest.Test053 is not satisfied for class StressTest.Test014" 
            if (typeof StressTest.Test058 != 'function') throw "Dependency StressTest.Test058 is not satisfied for class StressTest.Test014" 
            if (typeof StressTest.Test069 != 'function') throw "Dependency StressTest.Test069 is not satisfied for class StressTest.Test014" 
            if (typeof StressTest.Test079 != 'function') throw "Dependency StressTest.Test079 is not satisfied for class StressTest.Test014" 
            if (typeof StressTest.Test086 != 'function') throw "Dependency StressTest.Test086 is not satisfied for class StressTest.Test014" 
            if (typeof StressTest.Test087 != 'function') throw "Dependency StressTest.Test087 is not satisfied for class StressTest.Test014" 
            if (typeof StressTest.Test089 != 'function') throw "Dependency StressTest.Test089 is not satisfied for class StressTest.Test014" 
    }
})
