var declared = false
try {
    declared = typeof StressTest.Test015 == 'function'
} catch (e) {
}

if (declared) throw "Double declaration of StressTest.Test015"


Class('StressTest.Test015', {
    VERSION : 0.1,
    
    use : [ 
           'StressTest.Test022',
           'StressTest.Test023',
           'StressTest.Test028',
           'StressTest.Test031',
           'StressTest.Test034',
           'StressTest.Test053',
           'StressTest.Test064',
           'StressTest.Test065',
           'StressTest.Test070',
           'StressTest.Test071',
           'StressTest.Test083'
    ],
    
    methods : {
        result : function () { return 15 }
    },
    
    body : function(){
            if (typeof StressTest.Test022 != 'function') throw "Dependency StressTest.Test022 is not satisfied for class StressTest.Test015" 
            if (typeof StressTest.Test023 != 'function') throw "Dependency StressTest.Test023 is not satisfied for class StressTest.Test015" 
            if (typeof StressTest.Test028 != 'function') throw "Dependency StressTest.Test028 is not satisfied for class StressTest.Test015" 
            if (typeof StressTest.Test031 != 'function') throw "Dependency StressTest.Test031 is not satisfied for class StressTest.Test015" 
            if (typeof StressTest.Test034 != 'function') throw "Dependency StressTest.Test034 is not satisfied for class StressTest.Test015" 
            if (typeof StressTest.Test053 != 'function') throw "Dependency StressTest.Test053 is not satisfied for class StressTest.Test015" 
            if (typeof StressTest.Test064 != 'function') throw "Dependency StressTest.Test064 is not satisfied for class StressTest.Test015" 
            if (typeof StressTest.Test065 != 'function') throw "Dependency StressTest.Test065 is not satisfied for class StressTest.Test015" 
            if (typeof StressTest.Test070 != 'function') throw "Dependency StressTest.Test070 is not satisfied for class StressTest.Test015" 
            if (typeof StressTest.Test071 != 'function') throw "Dependency StressTest.Test071 is not satisfied for class StressTest.Test015" 
            if (typeof StressTest.Test083 != 'function') throw "Dependency StressTest.Test083 is not satisfied for class StressTest.Test015" 
    }
})
