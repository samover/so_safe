'use strict';

/**
 * @ngdoc function
 * @name SoSafe.controller:HomeController
 * @description
 * # HomeController
 */
angular.module('SoSafe')
  .controller('LoginController', function($scope, $state) {
    $scope.data = {};

    $scope.login = function() {
      $state.go('app.button')
    }


    // just an example...


  });
