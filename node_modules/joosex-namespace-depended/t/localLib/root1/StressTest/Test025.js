var declared = false
try {
    declared = typeof StressTest.Test025 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test025"


Class('StressTest.Test025', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test029',
           'StressTest.Test034',
           'StressTest.Test036',
           'StressTest.Test045',
           'StressTest.Test067',
           'StressTest.Test090',
           'StressTest.Test099'
    ],
    
    methods : {
        result : function () { return 25 }
    },
    
    body : function(){
            if (typeof StressTest.Test029 != 'function') throw "Dependency StressTest.Test029 is not satisfied for class StressTest.Test025" 
            if (typeof StressTest.Test034 != 'function') throw "Dependency StressTest.Test034 is not satisfied for class StressTest.Test025" 
            if (typeof StressTest.Test036 != 'function') throw "Dependency StressTest.Test036 is not satisfied for class StressTest.Test025" 
            if (typeof StressTest.Test045 != 'function') throw "Dependency StressTest.Test045 is not satisfied for class StressTest.Test025" 
            if (typeof StressTest.Test067 != 'function') throw "Dependency StressTest.Test067 is not satisfied for class StressTest.Test025" 
            if (typeof StressTest.Test090 != 'function') throw "Dependency StressTest.Test090 is not satisfied for class StressTest.Test025" 
            if (typeof StressTest.Test099 != 'function') throw "Dependency StressTest.Test099 is not satisfied for class StressTest.Test025" 
    }
})
