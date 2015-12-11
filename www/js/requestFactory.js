'use strict'

angular.module('SoSafe')
  .factory('Request', function($firebaseArray){
    return function(child) {
      return $firebaseArray(new Firebase('https://sosafe.firebaseio.com/' + child));
    };
  });
