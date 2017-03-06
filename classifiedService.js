angular.module("ngClassifieds").service("classifiedService",function($http){

    this.getClassifieds = function() {
        return $http({
            
            method: "GET",
            url: "classified.json"
            
        })
    }
    
    
    
    
    
    
    
})