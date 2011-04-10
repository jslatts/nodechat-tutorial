if (typeof BasicMetaClass == 'function' && BasicMetaClass.meta.constructor == Joose.Meta.Role) throw "Double declaration of BasicMetaClass";

Class('BasicMetaClass', {
    
    VERSION : 0.01,
    
    isa : Joose.Meta.Class,
    meta : Joose.Meta.Class,
    
    does : 'BasicMetaRole'
    
})
