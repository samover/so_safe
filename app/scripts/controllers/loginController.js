'use strict';

/**
 * @ngdoc function
 * @name SoSafe.controller:HomeController
 * @description
 * # HomeController
 */
angular.module('SoSafe')
  .controller('LoginController', ['User', function($scope, $state, User) {
    $scope.data = {};

    $scope.login = function() {
      // var $scope.user = new User($scope.name);
      console.log(new User($scope.name));
      $state.go('app.button');
    };


    // just an example...


  }]);
