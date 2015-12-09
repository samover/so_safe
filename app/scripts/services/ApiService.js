'use strict';

/**
 * @ngdoc service
 * @name SoSafe.ApiService
 * @description
 * # ApiService
 * Retrieves correct api to make requests against.
 * Uses settings from API_ENDPOINT defined in /config/apiEndpoint.js
 *
 * Usage example: $http({
 *                      url: ApiService.getEndPoint() + '/things',
 *                      method: 'GET'
 *                 })
 *
 */
angular.module('SoSafe')
  .factory('ApiService', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.sendRequest = function(){
      var requestRef = new Firebase('https://sosafe.firebaseio.com');
      var child = requestRef.child('requests');
      var sender = 'Sam';
      var receivers = [
        {
          'name': 'Radu',
          'status': false
        }, {
          'name': 'Amy',
          'status': false
        }
      ];

      child.push({
        'sender': sender,
        'receivers': receivers
      });

      $scope.friends = receivers;
    };

    $scope.sendResponse = function() {
      var receiversRef = new Firebase('https://sosafe.firebaseio.com/requests');

      receiversRef.orderByKey().on('child_added', function(snapshot) {
        var request = snapshot.val();
        var key = snapshot.key();
        var postRef = new Firebase(receiversRef.toString() + '/' + key);

        for(var i = 0; i < request.receivers.length; i++) {
          if(request.receivers[i].name === $scope.user) {
            request.receivers[i].status = true;
          }
        }

        postRef.update(request);
      });
    };
    $scope.resetRequest = function() {
      var url = requestRef.toString() + '/' + key;
      var deleteRef = new Firebase(url);
      deleteRef.remove();
      $scope.friends = [];
    };

  }]);
