
/**
 * This Securable Modules [1] loader is currently only tested against Narwhal [2].
 * 
 * [1] - https://wiki.mozilla.org/ServerJS/Modules/SecurableModules
 * [2] - http://narwhaljs.org/
 * 
 * Copyright (c) 2009 Christoph Dorn <christoph@christophdorn.com>
 * 
 * Usage:
 * 
 *   SetJoose include path stack:
 *     
 *     JooseX.Namespace.Depended.Manager.my.INC = [ '/lib/joose/lib/src' ]
 *     
 *   Define module that depends on another module:
 *   
 *     Module("OurModule", {
 *       use : 'require://OtherModule',
 *       body : function () {
 *         // TODO: Implement Classes
 *       }
 *     })
 */

Class('JooseX.Namespace.Depended.Resource.Require', {
    
    isa : JooseX.Namespace.Depended.Resource,
    
    does : [ JooseX.Namespace.Depended.Transport.Require, JooseX.Namespace.Depended.Materialize.Eval ],
    
    
    methods : {
        
        getUrls : function () {
            var urls = []
            var className = this.token.split('.')
            
            // Resolve the module/class against our Joose include path stack
            Joose.A.each(JooseX.Namespace.Depended.Manager.my.INC, function (libroot) {
                
                libroot = libroot.replace(/\/$/, '');
                
                var path = [ libroot ].concat(className).join('/') + '.js';

                try {
                  
                  // Ensure path exists
                  path = require.loader.find(path);

                  urls.push( path );

                } catch(e) {}               
            });
            
            // Let the require.loader resolve the module/class against the ServerJS include path stack
            try {
                urls.push( require.loader.find(className) );
            } catch(e) {}               
            
            return urls
        }
        
    },
    
    
    override : {
        
        addDescriptor : function (descriptor) {
            if (typeof descriptor == 'object' && !descriptor.token) 
                Joose.O.eachOwn(descriptor, function (version, name) {
                    this.addDescriptor({
                        type : 'require',
                        token : name,
                        version : version
                    })
                }, this);
            else
                this.SUPER(descriptor);
        }

    }

})

JooseX.Namespace.Depended.Manager.my.registerResourceClass('require', JooseX.Namespace.Depended.Resource.Require)
