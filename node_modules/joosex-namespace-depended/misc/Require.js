/**
 * Copyright (c) 2009 Christoph Dorn <christoph@christophdorn.com>
 */

Role('JooseX.Namespace.Depended.Transport.Require', {
    
    requires : [ 'handleLoad' ],
    
    override : {
        
        load: function (url, onsuccess, onerror) {
            var text; 
            
            try {
                text = require(url);
            } catch (e) {
                onerror(e)
                return
            }
            
            onsuccess(text, url);
        }
        
    }
    
})
