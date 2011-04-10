if (typeof BasicRole2 == 'function' && BasicRole2.meta.constructor == Joose.Meta.Role) throw "Double declaration of BasicRole2";

Role('BasicRole2', {
    
    VERSION : 0.01,
    
    have : {
        res2 : 'res2'
    },
    
    
    methods : {
        process2 : function () { 
            this.res2 = 'processed2' 
        }
    }
    
})
