'use strict';

/**
 * @ngdoc function
 * @name SoSafe.controller:HomeController
 * @description
 * # HomeController
 */
angular.module('SoSafe')
  .controller('HomeController', function($scope) {

    $scope.myHTML = null;

    //// just an example...
    //$scope.fetchRandomText = function() {
      //ExampleService.doSomethingAsync()
        //.then(ExampleService.fetchSomethingFromServer)
        //.then(function(response) {
            //$scope.myHTML = response.data.text;
            //// close pull to refresh loader
            //$scope.$broadcast('scroll.refreshComplete');
        //});
    //};

    //$scope.fetchRandomText();

  });
