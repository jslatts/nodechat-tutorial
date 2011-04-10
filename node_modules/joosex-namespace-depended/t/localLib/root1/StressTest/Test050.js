var declared = false
try {
    declared = typeof StressTest.Test050 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test050"


Class('StressTest.Test050', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test059',
           'StressTest.Test061',
           'StressTest.Test064',
           'StressTest.Test066',
           'StressTest.Test074',
           'StressTest.Test092',
           'StressTest.Test094',
           'StressTest.Test097',
           'StressTest.Test099'
    ],
    
    methods : {
        result : function () { return 50 }
    },
    
    body : function(){
            if (typeof StressTest.Test059 != 'function') throw "Dependency StressTest.Test059 is not satisfied for class StressTest.Test050" 
            if (typeof StressTest.Test061 != 'function') throw "Dependency StressTest.Test061 is not satisfied for class StressTest.Test050" 
            if (typeof StressTest.Test064 != 'function') throw "Dependency StressTest.Test064 is not satisfied for class StressTest.Test050" 
            if (typeof StressTest.Test066 != 'function') throw "Dependency StressTest.Test066 is not satisfied for class StressTest.Test050" 
            if (typeof StressTest.Test074 != 'function') throw "Dependency StressTest.Test074 is not satisfied for class StressTest.Test050" 
            if (typeof StressTest.Test092 != 'function') throw "Dependency StressTest.Test092 is not satisfied for class StressTest.Test050" 
            if (typeof StressTest.Test094 != 'function') throw "Dependency StressTest.Test094 is not satisfied for class StressTest.Test050" 
            if (typeof StressTest.Test097 != 'function') throw "Dependency StressTest.Test097 is not satisfied for class StressTest.Test050" 
            if (typeof StressTest.Test099 != 'function') throw "Dependency StressTest.Test099 is not satisfied for class StressTest.Test050" 
    }
})
