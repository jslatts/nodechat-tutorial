if (typeof BasicRole1 == 'function' && BasicRole1.meta.constructor == Joose.Meta.Role) throw "Double declaration of BasicRole1";

Role('BasicRole1', {
    
    VERSION : 0.01,
    
    have : {
        res1 : 'res1'
    },
    
    
    methods : {
        process1 : function () { 
            this.res1 = 'processed1' 
        }
    }
    
})
