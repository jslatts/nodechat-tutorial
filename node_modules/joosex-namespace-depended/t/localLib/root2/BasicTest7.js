if (typeof BasicTest7 == 'function' && BasicTest7.meta.constructor == Joose.Meta.Class) throw "Double declaration of BasicTest7";

Class('BasicTest7', {
    VERSION : 0.1,
    
    methods : {
        result : function () { return 7 }
    }
    
})
