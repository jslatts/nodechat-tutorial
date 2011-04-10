var declared = false
try {
    declared = typeof StressTest.Test022 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test022"


Class('StressTest.Test022', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test030',
           'StressTest.Test033',
           'StressTest.Test035',
           'StressTest.Test037',
           'StressTest.Test039',
           'StressTest.Test042',
           'StressTest.Test047',
           'StressTest.Test055',
           'StressTest.Test065',
           'StressTest.Test073',
           'StressTest.Test077',
           'StressTest.Test086'
    ],
    
    methods : {
        result : function () { return 22 }
    },
    
    body : function(){
            if (typeof StressTest.Test030 != 'function') throw "Dependency StressTest.Test030 is not satisfied for class StressTest.Test022" 
            if (typeof StressTest.Test033 != 'function') throw "Dependency StressTest.Test033 is not satisfied for class StressTest.Test022" 
            if (typeof StressTest.Test035 != 'function') throw "Dependency StressTest.Test035 is not satisfied for class StressTest.Test022" 
            if (typeof StressTest.Test037 != 'function') throw "Dependency StressTest.Test037 is not satisfied for class StressTest.Test022" 
            if (typeof StressTest.Test039 != 'function') throw "Dependency StressTest.Test039 is not satisfied for class StressTest.Test022" 
            if (typeof StressTest.Test042 != 'function') throw "Dependency StressTest.Test042 is not satisfied for class StressTest.Test022" 
            if (typeof StressTest.Test047 != 'function') throw "Dependency StressTest.Test047 is not satisfied for class StressTest.Test022" 
            if (typeof StressTest.Test055 != 'function') throw "Dependency StressTest.Test055 is not satisfied for class StressTest.Test022" 
            if (typeof StressTest.Test065 != 'function') throw "Dependency StressTest.Test065 is not satisfied for class StressTest.Test022" 
            if (typeof StressTest.Test073 != 'function') throw "Dependency StressTest.Test073 is not satisfied for class StressTest.Test022" 
            if (typeof StressTest.Test077 != 'function') throw "Dependency StressTest.Test077 is not satisfied for class StressTest.Test022" 
            if (typeof StressTest.Test086 != 'function') throw "Dependency StressTest.Test086 is not satisfied for class StressTest.Test022" 
    }
})
