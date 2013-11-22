var siteApp = angular.module('myApp', ['ngRoute']);


siteApp
    .config(['$locationProvider', '$routeProvider',
    function($locationProvider, $routeProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/', {
                templateUrl: 'views/body.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }])
    .run(function() {
        console.log("Start App Application v1.0");
    });