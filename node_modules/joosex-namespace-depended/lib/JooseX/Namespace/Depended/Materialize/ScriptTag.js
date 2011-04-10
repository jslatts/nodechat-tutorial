Role('JooseX.Namespace.Depended.Materialize.ScriptTag', {
    
    requires : [ 'handleLoad' ],
    
    methods : {
        
        materialize : function (resourceBlob) {
            var loaderNode = document.createElement("script")
            
            loaderNode.text = resourceBlob
            
            //adding to body, because Safari do not create HEAD for iframe's documents
            document.body.appendChild(loaderNode)
        }
    }
})
