var declared = false
try {
    declared = typeof StressTest.Test100 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test100"


Class('StressTest.Test100', {
    VERSION : 0.1,
    
    use : [ 
    ],
    
    methods : {
        result : function () { return 100 }
    },
    
    body : function(){
    }
})
