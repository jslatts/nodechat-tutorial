Class('JooseX.Namespace.Depended.Resource.JavaScript', {
    
    isa : JooseX.Namespace.Depended.Resource,
    
    has : {
        
        hasDirectUrl    : false
    },
    
    after: {
        
        initialize: function () {
            var me      = this
            
            // backward compat
            if (this.type == 'nonjoose') this.type = 'javascript'
            
            
            var presence = this.presence
            
            if (typeof presence == 'string') this.presence = function () {
                return eval(presence)
            }
            
            if (!presence) this.presence = function () {
                return eval(me.token)
            }
            
            if (!this.readyness) this.readyness = this.presence
        }
        
    },

    
    methods : {
        
        BUILD : function (config) {
            var token = config.token
            
            var match = /^=(.*)/.exec(token)
            
            if (match) {
                this.hasDirectUrl   = true
                
                token               = match[1]
            }
            
            if (/^http/.test(token)) {
                this.hasDirectUrl   = true
                
                config.trait        = JooseX.Namespace.Depended.Transport.ScriptTag
            }
            
            if (/^\//.test(token)) this.hasDirectUrl   = true
                
            return config
        },
        
        
        getUrls : function () {
            var url = this.token
            
            if (this.hasDirectUrl) return [ url ]
            
            var manager = JooseX.Namespace.Depended.Manager.my
            
            return Joose.A.map(manager.getINC(), function (libroot) {
                libroot = libroot.replace(/\/$/, '')
                
                return [ libroot ].concat(url).join('/') + (manager.disableCaching ? '?disableCaching=' + new Date().getTime() : '')
            })
        }
    }

})

JooseX.Namespace.Depended.Manager.my.registerResourceClass('javascript',    JooseX.Namespace.Depended.Resource.JavaScript)
JooseX.Namespace.Depended.Manager.my.registerResourceClass('nonjoose',      JooseX.Namespace.Depended.Resource.JavaScript)
