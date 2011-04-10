var declared = false
try {
    declared = typeof StressTest.Test099 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test099"


Class('StressTest.Test099', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test100'
    ],
    
    methods : {
        result : function () { return 99 }
    },
    
    body : function(){
            if (typeof StressTest.Test100 != 'function') throw "Dependency StressTest.Test100 is not satisfied for class StressTest.Test099" 
    }
})
