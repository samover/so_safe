angular.module('SoSafe', ['ionic', 'ngResource'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('app', {
      url: '/',
      abstract: true,
      templateUrl: 'templates/main.html',
      controller: 'MainController'
    })
    .state('app.home', {
      url: '/home',
      cache: true,
      views: {
        'viewContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeController'
        }
      }
    })
    .state('app.login', {
      url: '/login',
      cache: true,
      views: {
        'viewContent': {
          templateUrl: 'templates/login.html',
          controller: 'LoginController'
        }
      }
    });
  $urlRouterProvider.otherwise('/app/login');

});
