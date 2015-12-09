'use strict';

/**
 * @ngdoc function
 * @name SoSafe.controller:HomeController
 * @description
 * # HomeController
 */
angular.module('SoSafe')
  .controller('LoginController', ['$scope', '$rootScope', '$state', 'User', function($scope, $rootScope, $state, User) {
    var self = this;

    self.login = function() {
      $rootScope.user = new User($scope.name);
      $state.go('app.button');
    };


    // just an example...


  }]);
