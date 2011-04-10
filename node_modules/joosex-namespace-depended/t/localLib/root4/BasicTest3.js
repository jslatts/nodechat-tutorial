if (typeof BasicTest3 == 'function' && BasicTest3.meta.constructor == Joose.Meta.Class) throw "Double declaration of BasicTest3";

Class('BasicTest3', {
    VERSION : 0.1,
    
    use : 'BasicTest4',
    
    methods : {
        result : function () { return 3 }
    }
    
})


if (typeof BasicTest4 == 'function' && BasicTest4.meta.constructor == Joose.Meta.Class) throw "Double declaration of BasicTest4";

Class('BasicTest4', {
    VERSION : 0.1,
    
    methods : {
        result : function () { return 4 }
    }
    
})
