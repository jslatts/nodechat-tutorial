var declared = false
try {
    declared = typeof StressTest.Test067 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test067"


Class('StressTest.Test067', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test073',
           'StressTest.Test079',
           'StressTest.Test080',
           'StressTest.Test082',
           'StressTest.Test092',
           'StressTest.Test097',
           'StressTest.Test100'
    ],
    
    methods : {
        result : function () { return 67 }
    },
    
    body : function(){
            if (typeof StressTest.Test073 != 'function') throw "Dependency StressTest.Test073 is not satisfied for class StressTest.Test067" 
            if (typeof StressTest.Test079 != 'function') throw "Dependency StressTest.Test079 is not satisfied for class StressTest.Test067" 
            if (typeof StressTest.Test080 != 'function') throw "Dependency StressTest.Test080 is not satisfied for class StressTest.Test067" 
            if (typeof StressTest.Test082 != 'function') throw "Dependency StressTest.Test082 is not satisfied for class StressTest.Test067" 
            if (typeof StressTest.Test092 != 'function') throw "Dependency StressTest.Test092 is not satisfied for class StressTest.Test067" 
            if (typeof StressTest.Test097 != 'function') throw "Dependency StressTest.Test097 is not satisfied for class StressTest.Test067" 
            if (typeof StressTest.Test100 != 'function') throw "Dependency StressTest.Test100 is not satisfied for class StressTest.Test067" 
    }
})
