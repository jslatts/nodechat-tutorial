Class('Request.flXHR', {
    
    BEGIN : function (ready, resource) {
        resource.beginCount = resource.beginCount || 0
        
        resource.beginCount++
        
        ready()
    }
    
})
