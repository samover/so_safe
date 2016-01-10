'use strict';

var app = angular.module('SoSafe');

app.directive('panicButton', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/panic-button.html'
  };
});

app.directive('friendsList', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/friends-list.html'
  };
});
