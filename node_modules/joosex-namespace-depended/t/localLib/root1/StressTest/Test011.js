var declared = false
try {
    declared = typeof StressTest.Test011 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test011"


Class('StressTest.Test011', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test022',
           'StressTest.Test030',
           'StressTest.Test034',
           'StressTest.Test045',
           'StressTest.Test062',
           'StressTest.Test067',
           'StressTest.Test069',
           'StressTest.Test071',
           'StressTest.Test079',
           'StressTest.Test094'
    ],
    
    methods : {
        result : function () { return 11 }
    },
    
    body : function(){
            if (typeof StressTest.Test022 != 'function') throw "Dependency StressTest.Test022 is not satisfied for class StressTest.Test011" 
            if (typeof StressTest.Test030 != 'function') throw "Dependency StressTest.Test030 is not satisfied for class StressTest.Test011" 
            if (typeof StressTest.Test034 != 'function') throw "Dependency StressTest.Test034 is not satisfied for class StressTest.Test011" 
            if (typeof StressTest.Test045 != 'function') throw "Dependency StressTest.Test045 is not satisfied for class StressTest.Test011" 
            if (typeof StressTest.Test062 != 'function') throw "Dependency StressTest.Test062 is not satisfied for class StressTest.Test011" 
            if (typeof StressTest.Test067 != 'function') throw "Dependency StressTest.Test067 is not satisfied for class StressTest.Test011" 
            if (typeof StressTest.Test069 != 'function') throw "Dependency StressTest.Test069 is not satisfied for class StressTest.Test011" 
            if (typeof StressTest.Test071 != 'function') throw "Dependency StressTest.Test071 is not satisfied for class StressTest.Test011" 
            if (typeof StressTest.Test079 != 'function') throw "Dependency StressTest.Test079 is not satisfied for class StressTest.Test011" 
            if (typeof StressTest.Test094 != 'function') throw "Dependency StressTest.Test094 is not satisfied for class StressTest.Test011" 
    }
})
