var declared = false
try {
    declared = typeof StressTest.Test043 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test043"


Class('StressTest.Test043', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test055',
           'StressTest.Test063',
           'StressTest.Test065',
           'StressTest.Test066',
           'StressTest.Test070',
           'StressTest.Test072',
           'StressTest.Test077',
           'StressTest.Test083',
           'StressTest.Test084',
           'StressTest.Test089',
           'StressTest.Test095',
           'StressTest.Test097',
           'StressTest.Test100'
    ],
    
    methods : {
        result : function () { return 43 }
    },
    
    body : function(){
            if (typeof StressTest.Test055 != 'function') throw "Dependency StressTest.Test055 is not satisfied for class StressTest.Test043" 
            if (typeof StressTest.Test063 != 'function') throw "Dependency StressTest.Test063 is not satisfied for class StressTest.Test043" 
            if (typeof StressTest.Test065 != 'function') throw "Dependency StressTest.Test065 is not satisfied for class StressTest.Test043" 
            if (typeof StressTest.Test066 != 'function') throw "Dependency StressTest.Test066 is not satisfied for class StressTest.Test043" 
            if (typeof StressTest.Test070 != 'function') throw "Dependency StressTest.Test070 is not satisfied for class StressTest.Test043" 
            if (typeof StressTest.Test072 != 'function') throw "Dependency StressTest.Test072 is not satisfied for class StressTest.Test043" 
            if (typeof StressTest.Test077 != 'function') throw "Dependency StressTest.Test077 is not satisfied for class StressTest.Test043" 
            if (typeof StressTest.Test083 != 'function') throw "Dependency StressTest.Test083 is not satisfied for class StressTest.Test043" 
            if (typeof StressTest.Test084 != 'function') throw "Dependency StressTest.Test084 is not satisfied for class StressTest.Test043" 
            if (typeof StressTest.Test089 != 'function') throw "Dependency StressTest.Test089 is not satisfied for class StressTest.Test043" 
            if (typeof StressTest.Test095 != 'function') throw "Dependency StressTest.Test095 is not satisfied for class StressTest.Test043" 
            if (typeof StressTest.Test097 != 'function') throw "Dependency StressTest.Test097 is not satisfied for class StressTest.Test043" 
            if (typeof StressTest.Test100 != 'function') throw "Dependency StressTest.Test100 is not satisfied for class StressTest.Test043" 
    }
})
