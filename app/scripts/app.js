'use strict';

/**
 * @ngdoc overview
 * @name SoSafe
 * @description
 * # Initializes main application and routing
 *
 * Main module of the application.
 */


angular.module('SoSafe', ['ionic', 'ngCordova','firebase', 'ngResource'])

  .run(function($ionicPlatform) {

    $ionicPlatform.ready(function() {
      // save to use plugins here
    });

    // add possible global event handlers here

  })

  .config(function($httpProvider, $stateProvider, $urlRouterProvider) {
    // register $http interceptors, if any. e.g.
    // $httpProvider.interceptors.push('interceptor-name');

    // Application routing
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/main.html',
        controller: 'MainController'
      })
      .state('app.login', {
        url: '/login',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/login.html',
            controller: 'LoginController'
          }
        }
      })
      .state('app.button', {
        url: '/home',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/button.html',
            controller: 'ButtonController'
          }
        }
      })
      .state('app.settings', {
        url: '/settings',
        cache: true,
        views: {
          'viewContent': {
            templateUrl: 'templates/views/settings.html',
            controller: 'SettingsController'
          }
        }
      });


    // redirects to default route for undefined routes
    $urlRouterProvider.otherwise('/app/login');
  });
