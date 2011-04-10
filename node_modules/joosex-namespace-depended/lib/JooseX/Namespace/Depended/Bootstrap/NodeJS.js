JooseX.Namespace.Depended.Resource.JavaScript.meta.extend({
    
    does : [ JooseX.Namespace.Depended.Transport.NodeJS, JooseX.Namespace.Depended.Materialize.NodeJS ]
})



JooseX.Namespace.Depended.Manager.my.disableCaching = false

Joose.Namespace.Manager.my.containResources.unshift('require')



JooseX.Namespace.Depended.meta.extend({
    
    override : {
        
        collectDependencies : function (from, to, extend, propName) {
            if (propName != 'require') return this.SUPERARG(arguments)
            
            if (!from) return
            
            Joose.A.each(Joose.O.wantArray(from), function (url) {
                to.push({
                    type    : 'require',
                    token   : url
                })
            })
            
            delete extend.require
        }
    }
})
