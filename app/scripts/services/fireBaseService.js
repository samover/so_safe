'use strict';

/**
 * @ngdoc service
 * @name SoSafe.fireBaseService
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
  .factory('Requests', ['$firebaseArray', function($firebaseArray) {

    var requestRef = new Firebase('https://sosafe.firebaseio.com/requests');
    console.log(requestRef);
    return $firebaseArray(requestRef);
  }]);
