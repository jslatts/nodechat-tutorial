var declared = false
try {
    declared = typeof StressTest.Test097 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test097"


Class('StressTest.Test097', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test098',
           'StressTest.Test099',
           'StressTest.Test100'
    ],
    
    methods : {
        result : function () { return 97 }
    },
    
    body : function(){
            if (typeof StressTest.Test098 != 'function') throw "Dependency StressTest.Test098 is not satisfied for class StressTest.Test097" 
            if (typeof StressTest.Test099 != 'function') throw "Dependency StressTest.Test099 is not satisfied for class StressTest.Test097" 
            if (typeof StressTest.Test100 != 'function') throw "Dependency StressTest.Test100 is not satisfied for class StressTest.Test097" 
    }
})
