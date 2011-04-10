LazyClass('Lazy.Lazy2', {
    
    VERSION : 0.01,
    
    use : [ 'Chain1.Middle.Chain2', 'WithDependedMy2', 'Lazy.Lazy3' ],
    
    methods : {
        result : function () { return 'lazy2' }
    } 

})