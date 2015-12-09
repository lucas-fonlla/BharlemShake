var app = angular.module("app", ['ui.router', 'ngAnimate', 'ngMaterial']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .state('home.dashboard', {
            url: '/dashboard',
            templateUrl: 'views/dashboard.html'
        })
        .state('home.profile', {
            url: '/',
            templateUrl: 'views/profile.html',
            controller: 'ProfileCtrl'
        });
    $urlRouterProvider.otherwise('/dashboard');
});