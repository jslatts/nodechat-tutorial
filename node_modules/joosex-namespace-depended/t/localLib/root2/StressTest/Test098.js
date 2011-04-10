var declared = false
try {
    declared = typeof StressTest.Test098 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test098"


Class('StressTest.Test098', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test099',
           'StressTest.Test100'
    ],
    
    methods : {
        result : function () { return 98 }
    },
    
    body : function(){
            if (typeof StressTest.Test099 != 'function') throw "Dependency StressTest.Test099 is not satisfied for class StressTest.Test098" 
            if (typeof StressTest.Test100 != 'function') throw "Dependency StressTest.Test100 is not satisfied for class StressTest.Test098" 
    }
})
