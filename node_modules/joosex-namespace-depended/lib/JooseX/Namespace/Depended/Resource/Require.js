Class('JooseX.Namespace.Depended.Resource.Require', {
    
    isa     : JooseX.Namespace.Depended.Resource,
    
    
    methods : {
        
        getUrls : function () {
            return [ this.token ]
        },
        
        
        load: function (url, onsuccess, onerror) {
            
            require.async(url, function (err) {
                if (err instanceof Error) 
                    onerror(err)
                else
                    onsuccess('', url)
            })
            
        },

        
        materialize : function () {
        }
        
    }

})

JooseX.Namespace.Depended.Manager.my.registerResourceClass('require', JooseX.Namespace.Depended.Resource.Require)
