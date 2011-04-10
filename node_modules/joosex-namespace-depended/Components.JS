COMPONENTS = {
    
    "Kernel" : [
        "JooseX.Namespace.Depended.Manager",
    
        "JooseX.Namespace.Depended.Resource",
        
        "JooseX.Namespace.Depended.Materialize.Eval",
        
        "JooseX.Namespace.Depended.Resource.JavaScript",
        "JooseX.Namespace.Depended.Resource.JooseClass"
    ],
    
    
    "Web" : [
        "+Kernel",
    
        "jsan:JooseX.SimpleRequest",
        "JooseX.Namespace.Depended.Materialize.ScriptTag",
        
        "JooseX.Namespace.Depended.Transport.XHRAsync",
        "JooseX.Namespace.Depended.Transport.ScriptTag",
        
        "JooseX.Namespace.Depended",
        
        "JooseX.Namespace.Depended.Bootstrap.Web"
    ],
    
    "NodeJS" : [
        "+Kernel",
    
        "JooseX.Namespace.Depended.Transport.NodeJS",
        "JooseX.Namespace.Depended.Materialize.NodeJS",
        
        "JooseX.Namespace.Depended.Resource.Require",
        
        "JooseX.Namespace.Depended",
        "JooseX.Namespace.Depended.Bootstrap.NodeJS"
    ],
    
    
    "Auto" : [
        "+Kernel",
        
        "jsan:JooseX.SimpleRequest",
        
        "JooseX.Namespace.Depended.Materialize.ScriptTag",
        
        "JooseX.Namespace.Depended.Transport.XHRAsync",
        "JooseX.Namespace.Depended.Transport.ScriptTag",
        
        "JooseX.Namespace.Depended.Transport.NodeJS",
        "JooseX.Namespace.Depended.Materialize.NodeJS",
        
        "JooseX.Namespace.Depended.Resource.Require",
        
        "JooseX.Namespace.Depended",
        "JooseX.Namespace.Depended.Bootstrap.Auto"
    ]
} 

