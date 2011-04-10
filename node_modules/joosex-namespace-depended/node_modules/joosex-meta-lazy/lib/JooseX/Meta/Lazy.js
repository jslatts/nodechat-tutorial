Role('JooseX.Meta.Lazy', {
    
    have : {
        pendedProps                 : null,
        originalConstructor         : null,
        
        isEager                     : false
    },
    
    
    
    before : {
        
        prepareProps : function (extend) {
            if (extend.eager) this.isEager = true
            delete extend.eager
        },

        
        extend : function (props) {
            if (this.pending) this.finalize()
        }
        
    },
    
    
    after : {
        
        adaptConstructor: function (c) {
            c.$meta = function () {
                var meta = this.meta
                if (meta.pending) meta.finalize()
                
                return meta
            }
            
            c.$my = function () {
                var meta = this.meta
                if (meta.pending) meta.finalize()
                
                return this.my
            }        
        }
        
    },
    
    
    override : {
        
        extractConstructor : function (extend) {
            var originalConstructor = this.SUPER(extend)
            
            this.adaptConstructor(originalConstructor)
            
            return function () {
                var thisMeta = arguments.callee.meta    
                
                if (thisMeta.pending) thisMeta.finalize()    
                
                return originalConstructor.apply(this, arguments)    
            }
        },
        
        //is not re-entrant
        finalize : function (props) {
            if (this.isEager) return this.SUPER(props)
            
            if (!this.pending) {
                
                this.pending = true
                this.pendedProps = props
                
                return
            }
            
            this.pending = false
            this.isEager = true
            
            this.SUPER(this.pendedProps)
            delete this.pendedProps
        }
        
    },
    
    
    body : function () {
        
        //lazy checker will be installed system wide (into Joose.Managed.Bootstrap) to monitor for each usual class
        //whether the superclass or a role being added is lazy 
        var LazyChecker = Role({
            meta : Joose.Managed.Role,
            
            have : {
                pending                     : false
            },
            
            before : {
                
                addRole : function () {
                    Joose.A.each(arguments, function(arg) {
                        var role = (arg.meta instanceof Joose.Managed.Class) ? arg : arg.role    
                        
                        var roleMeta = role.meta
                        
                        if (roleMeta.meta.hasAttribute('pending') && roleMeta.pending) roleMeta.finalize()    
                    })
                },
                
                finalize : function (extend) {
                    if (!(this instanceof Joose.Managed.Role) && this.superClass != this.defaultSuperClass) {
                        
                        var superMeta = this.superClass.meta
                        
                        if (superMeta && superMeta.meta.hasAttribute('pending') && superMeta.pending) superMeta.finalize()
                    }
                }
            }
        })
        
        Joose.Managed.Bootstrap.meta.extend({
            does : LazyChecker
        })
        
        Joose.Namespace.Manager.my.register('LazyClass', Class('Class', {
            isa     : Joose.Meta.Class,
            meta    : Joose.Meta.Class,
            
            does    : JooseX.Meta.Lazy
        }))
        
        Joose.Namespace.Manager.my.register('LazyRole', Class('Role', {
            isa     : Joose.Meta.Role,
            meta    : Joose.Meta.Class,
            
            does    : JooseX.Meta.Lazy
        }))
    }
    
})    
