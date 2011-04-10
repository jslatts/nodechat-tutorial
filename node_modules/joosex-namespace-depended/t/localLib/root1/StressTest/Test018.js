var declared = false
try {
    declared = typeof StressTest.Test018 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test018"


Class('StressTest.Test018', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test022',
           'StressTest.Test024',
           'StressTest.Test045',
           'StressTest.Test047',
           'StressTest.Test055',
           'StressTest.Test061',
           'StressTest.Test064',
           'StressTest.Test067'
    ],
    
    methods : {
        result : function () { return 18 }
    },
    
    body : function(){
            if (typeof StressTest.Test022 != 'function') throw "Dependency StressTest.Test022 is not satisfied for class StressTest.Test018" 
            if (typeof StressTest.Test024 != 'function') throw "Dependency StressTest.Test024 is not satisfied for class StressTest.Test018" 
            if (typeof StressTest.Test045 != 'function') throw "Dependency StressTest.Test045 is not satisfied for class StressTest.Test018" 
            if (typeof StressTest.Test047 != 'function') throw "Dependency StressTest.Test047 is not satisfied for class StressTest.Test018" 
            if (typeof StressTest.Test055 != 'function') throw "Dependency StressTest.Test055 is not satisfied for class StressTest.Test018" 
            if (typeof StressTest.Test061 != 'function') throw "Dependency StressTest.Test061 is not satisfied for class StressTest.Test018" 
            if (typeof StressTest.Test064 != 'function') throw "Dependency StressTest.Test064 is not satisfied for class StressTest.Test018" 
            if (typeof StressTest.Test067 != 'function') throw "Dependency StressTest.Test067 is not satisfied for class StressTest.Test018" 
    }
})
