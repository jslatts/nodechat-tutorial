var declared = false
try {
    declared = typeof StressTest.Test016 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test016"


Class('StressTest.Test016', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test026',
           'StressTest.Test031',
           'StressTest.Test033',
           'StressTest.Test044',
           'StressTest.Test047',
           'StressTest.Test049',
           'StressTest.Test066',
           'StressTest.Test076',
           'StressTest.Test083',
           'StressTest.Test096'
    ],
    
    methods : {
        result : function () { return 16 }
    },
    
    body : function(){
            if (typeof StressTest.Test026 != 'function') throw "Dependency StressTest.Test026 is not satisfied for class StressTest.Test016" 
            if (typeof StressTest.Test031 != 'function') throw "Dependency StressTest.Test031 is not satisfied for class StressTest.Test016" 
            if (typeof StressTest.Test033 != 'function') throw "Dependency StressTest.Test033 is not satisfied for class StressTest.Test016" 
            if (typeof StressTest.Test044 != 'function') throw "Dependency StressTest.Test044 is not satisfied for class StressTest.Test016" 
            if (typeof StressTest.Test047 != 'function') throw "Dependency StressTest.Test047 is not satisfied for class StressTest.Test016" 
            if (typeof StressTest.Test049 != 'function') throw "Dependency StressTest.Test049 is not satisfied for class StressTest.Test016" 
            if (typeof StressTest.Test066 != 'function') throw "Dependency StressTest.Test066 is not satisfied for class StressTest.Test016" 
            if (typeof StressTest.Test076 != 'function') throw "Dependency StressTest.Test076 is not satisfied for class StressTest.Test016" 
            if (typeof StressTest.Test083 != 'function') throw "Dependency StressTest.Test083 is not satisfied for class StressTest.Test016" 
            if (typeof StressTest.Test096 != 'function') throw "Dependency StressTest.Test096 is not satisfied for class StressTest.Test016" 
    }
})
