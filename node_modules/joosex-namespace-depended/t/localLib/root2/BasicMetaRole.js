if (typeof BasicMetaRole == 'function' && BasicMetaRole.meta.constructor == Joose.Meta.Role) throw "Double declaration of BasicMetaRole";

Role('BasicMetaRole', {
    
    VERSION : 0.01,
    
    builder : {
        
        methods : {
            sugar : function (targetMeta, info) { 
                targetMeta.stem.properties.attributes.addProperty('sugar', { init : 'sweet' }) 
            }
        }
    }
    
})
