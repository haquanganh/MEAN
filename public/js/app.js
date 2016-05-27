angular.module('app', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        });
        $routeProvider.when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutController'
        });
        $routeProvider.when('/add', {
            templateUrl: 'views/add.html',
            controller: 'PostController'
        });
    })
    .controller('PostController', function($scope) {
        $scope.add = 'Please add new item';
        
    })
    .controller('HomeController', function($scope) {
        $scope.welcome = 'Welcome to MEAN Stack';
    })
    .controller('AboutController', function($scope) {
        $scope.about = 'MEAN stack developement';
    });
