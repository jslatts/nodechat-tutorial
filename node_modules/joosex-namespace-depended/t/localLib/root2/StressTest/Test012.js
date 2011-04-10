var declared = false
try {
    declared = typeof StressTest.Test012 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test012"


Class('StressTest.Test012', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test017',
           'StressTest.Test024',
           'StressTest.Test035',
           'StressTest.Test039',
           'StressTest.Test044',
           'StressTest.Test047',
           'StressTest.Test066',
           'StressTest.Test071',
           'StressTest.Test081',
           'StressTest.Test085',
           'StressTest.Test086',
           'StressTest.Test095'
    ],
    
    methods : {
        result : function () { return 12 }
    },
    
    body : function(){
            if (typeof StressTest.Test017 != 'function') throw "Dependency StressTest.Test017 is not satisfied for class StressTest.Test012" 
            if (typeof StressTest.Test024 != 'function') throw "Dependency StressTest.Test024 is not satisfied for class StressTest.Test012" 
            if (typeof StressTest.Test035 != 'function') throw "Dependency StressTest.Test035 is not satisfied for class StressTest.Test012" 
            if (typeof StressTest.Test039 != 'function') throw "Dependency StressTest.Test039 is not satisfied for class StressTest.Test012" 
            if (typeof StressTest.Test044 != 'function') throw "Dependency StressTest.Test044 is not satisfied for class StressTest.Test012" 
            if (typeof StressTest.Test047 != 'function') throw "Dependency StressTest.Test047 is not satisfied for class StressTest.Test012" 
            if (typeof StressTest.Test066 != 'function') throw "Dependency StressTest.Test066 is not satisfied for class StressTest.Test012" 
            if (typeof StressTest.Test071 != 'function') throw "Dependency StressTest.Test071 is not satisfied for class StressTest.Test012" 
            if (typeof StressTest.Test081 != 'function') throw "Dependency StressTest.Test081 is not satisfied for class StressTest.Test012" 
            if (typeof StressTest.Test085 != 'function') throw "Dependency StressTest.Test085 is not satisfied for class StressTest.Test012" 
            if (typeof StressTest.Test086 != 'function') throw "Dependency StressTest.Test086 is not satisfied for class StressTest.Test012" 
            if (typeof StressTest.Test095 != 'function') throw "Dependency StressTest.Test095 is not satisfied for class StressTest.Test012" 
    }
})
