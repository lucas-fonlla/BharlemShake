var app = angular.module("app", ['ui.router', 'ngAnimate', 'ngMaterial']);

app.config(function ($stateProvider, $urlRouterProvider, $mdIconProvider, $mdThemingProvider) {
    $stateProvider
        .state('home', {
            url: '',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .state('home.dashboard', {
            url: '/dashboard',
            templateUrl: 'views/dashboard.html'
        })
        .state('home.profile', {
            url: '/profile',
            templateUrl: 'views/profile.html',
            controller: 'ProfileCtrl'
        })
        .state('home.products', {
            url: '/products',
            templateUrl: 'views/products.html',
            controller: 'ProductListCtrl'
        });
    $urlRouterProvider.otherwise('/products');


    $mdIconProvider
        .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
        .iconSet('device', 'img/icons/sets/device-icons.svg', 24)
        .iconSet('communication', 'img/icons/sets/communication-icons.svg', 24)
        .defaultIconSet('img/icons/sets/core-icons.svg', 24);

    $mdThemingProvider
        .theme('default')
        .primaryPalette('grey', {
            'default': '600'
        })
        .accentPalette('red', {
            'default': '500'
        })
        .warnPalette('defaultPrimary');

    $mdThemingProvider.theme('dark', 'default')
        .primaryPalette('defaultPrimary')
        .dark();

    $mdThemingProvider.theme('grey', 'default')
        .primaryPalette('grey');

    $mdThemingProvider.theme('custom', 'default')
        .primaryPalette('defaultPrimary', {
            'hue-1': '50'
        });

    $mdThemingProvider.definePalette('defaultPrimary', {
        '50':  '#FFFFFF',
        '100': 'rgb(255, 198, 197)',
        '200': '#E75753',
        '300': '#E75753',
        '400': '#E75753',
        '500': '#E75753',
        '600': '#E75753',
        '700': '#E75753',
        '800': '#E75753',
        '900': '#E75753',
        'A100': '#E75753',
        'A200': '#E75753',
        'A400': '#E75753',
        'A700': '#E75753'
    });
});