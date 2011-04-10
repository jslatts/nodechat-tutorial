var declared = false
try {
    declared = typeof StressTest.Test039 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test039"


Class('StressTest.Test039', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test042',
           'StressTest.Test077'
    ],
    
    methods : {
        result : function () { return 39 }
    },
    
    body : function(){
            if (typeof StressTest.Test042 != 'function') throw "Dependency StressTest.Test042 is not satisfied for class StressTest.Test039" 
            if (typeof StressTest.Test077 != 'function') throw "Dependency StressTest.Test077 is not satisfied for class StressTest.Test039" 
    }
})
