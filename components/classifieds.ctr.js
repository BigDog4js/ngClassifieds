angular.module("ngClassifieds").controller("classifiedsCtrl",function($scope,classifiedService) {
    
$scope.addClassified = function() {
    console.log($scope.addClassifiedTest)
    // Open a view or a dialog for them to enter the fields
    // Create a form with those fields
    // Save the values to $scope
    // Then push the values to the array
    
    $scope.classifieds.push( 
        {
            "id":"6",
            "title":"20 Foot Equipment Trailer",
            "description":"2013 rainbow trailer 20 feet x 82 inch deck area, two 5,000 lb axels, electric brakes, two pull out ramps, break away box, spare tire.",
            "price":6000,
            "posted":"2015-10-24",
            "contact": {
              "name":"John Doe",
              "phone":"(555) 555-5555",
              "email":"johndoe@gmail.com"
            },
            "categories":[
              "Vehicles",
              "Parts and Accessories"
            ],
            "image": "http://www.louisianasportsman.com/classifieds/pics/p1358549934434943.jpg",
            "views":213
 
        }
    )
}   

$scope.getClassifieds = function(){ 

    classifiedService.getClassifieds().then(function(response){

        console.log (response)
        $scope.classifieds = response.data

    })
    
} 

$scope.getClassifieds()

})
                                           