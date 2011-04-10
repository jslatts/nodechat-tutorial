var declared = false
try {
    declared = typeof StressTest.Test057 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test057"


Class('StressTest.Test057', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test060',
           'StressTest.Test066',
           'StressTest.Test067',
           'StressTest.Test077',
           'StressTest.Test078',
           'StressTest.Test079',
           'StressTest.Test080',
           'StressTest.Test092'
    ],
    
    methods : {
        result : function () { return 57 }
    },
    
    body : function(){
            if (typeof StressTest.Test060 != 'function') throw "Dependency StressTest.Test060 is not satisfied for class StressTest.Test057" 
            if (typeof StressTest.Test066 != 'function') throw "Dependency StressTest.Test066 is not satisfied for class StressTest.Test057" 
            if (typeof StressTest.Test067 != 'function') throw "Dependency StressTest.Test067 is not satisfied for class StressTest.Test057" 
            if (typeof StressTest.Test077 != 'function') throw "Dependency StressTest.Test077 is not satisfied for class StressTest.Test057" 
            if (typeof StressTest.Test078 != 'function') throw "Dependency StressTest.Test078 is not satisfied for class StressTest.Test057" 
            if (typeof StressTest.Test079 != 'function') throw "Dependency StressTest.Test079 is not satisfied for class StressTest.Test057" 
            if (typeof StressTest.Test080 != 'function') throw "Dependency StressTest.Test080 is not satisfied for class StressTest.Test057" 
            if (typeof StressTest.Test092 != 'function') throw "Dependency StressTest.Test092 is not satisfied for class StressTest.Test057" 
    }
})
