angular.module("ngClassifieds",["ngMaterial", "ui.router"])
.config(function($mdThemingProvider, $stateProvider, $urlRouterProvider) {
    
    // Angular material configuration
    
    $mdThemingProvider.theme('default')
    .primaryPalette('teal')
    .accentPalette('orange');
    
    // Routes configuration
    // This tells the router to send them home if they type an address wrong
    $urlRouterProvider.otherwise("/")
    
    //$stateProvider configures as many states as you need. 
    $stateProvider
        .state("home", {//config
            url: "/", // url is always relative; '/' + state name
            templateUrl: "views/home.html",
            controller: "classifiedsCtrl"
        })
    
        .state("newads", {//config
            url: "/newads",
            templateUrl: "views/newAds.html",
            controller: "classifiedsCtrl"
        })
});

