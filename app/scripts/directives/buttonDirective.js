'use strict';

/**
 * @name SoSafe.buttonDirective
 * @description
 * Our button directive
 */

var app = angular.module('SoSafe');

app.directive('panicButton', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/views/panic-button.html'
  };
});

app.directive('friendsList', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/views/friends-list.html'
  };
});

