'use strict';

/**
 * @name SoSafe.buttonDirective
 * @description
 * Our button directive
 */
angular.module('SoSafe')
  .directive('panicButton', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/views/panic-button.html'
    };

  //.directive('friendsList', function() {
    //return {
      //restrict: 'E',
      //templateUrl: 'templates/views/friends-list.html'
    //}
  //});
});

