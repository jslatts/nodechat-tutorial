if (typeof BasicRole3 == 'function' && BasicRole3.meta.constructor == Joose.Meta.Role) throw "Double declaration of BasicRole3";

Role('BasicRole3', {
    
    VERSION : 0.01,
    
    traits : {
        BasicMetaRole : 0.01
    },
    
    have : {
        res3 : 'res3'
    },
    
    
    methods : {
        process3 : function () { 
            this.res3 = 'processed3' 
        }
    }
    
})
