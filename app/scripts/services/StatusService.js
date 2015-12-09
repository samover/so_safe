'use strict';

/**
 * @ngdoc function
 * @name SoSafe.service:StatusService
 * @description
 * # StatusService
 */
angular.module('SoSafe')
  // use factory for services
  .factory('StatusService', ['$scope', function($scope) {

    $scope.message = 'Are you ok?';



  }]);
