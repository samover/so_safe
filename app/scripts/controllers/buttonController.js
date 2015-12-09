'use strict';

angular.module('SoSafe')
  .controller('ButtonController', ['$scope', '$state', function($scope, $state) {
    var requestRef = new Firebase('https://sosafe.firebaseio.com/requests');
    // var requestRef = new Firebase('https://sosafe.firebaseio.com/');

    $scope.friends = [];
    $scope.user = 'Radu';

    console.log('These are my friends: ' + $scope.friends);

    requestRef.orderByKey().on('child_added', function(snapshot) {
      var receivers = snapshot.val().receivers,
      sender = snapshot.val().sender;
      for(var i =0; i < receivers.length; i++){
        if(receivers[i].name === $scope.user){
          $scope.status.message = 'I am ok!'
        }
      }
      $state.go($state.current, {}, { reload: true });
    });

    requestRef.orderByKey().on('child_changed', function(snapshot) {
      var receivers = snapshot.val().receivers,
      sender = snapshot.val().sender;
      if( sender === $scope.user ) {
        $scope.friends = receivers;
        var friendArray = receivers.filter(function(receiver){
          return receiver.status === false;
        });
        if(friendArray.length === 0) {
          console.log("hello");
          $scope.status.message = 'Are you ok?';
        }
      }
      $state.go($state.current, {}, { reload: true });
      console.log($scope.friends);
      console.log($scope.status.message);
    });

    $scope.status = {
      message: 'Are you ok?'
    };

    $scope.changeStatus = function(){
      if ($scope.status.message === 'Are you ok?'){
        $scope.status.message = 'Waiting for response';
        $scope.sendRequest();
      } else if ($scope.status.message === 'I am ok!') {
        $scope.sendResponse();
        $scope.status.message = 'Are you ok?';
      }
    };

    $scope.sendRequest = function(){
      var requestRef = new Firebase('https://sosafe.firebaseio.com');
      var child = requestRef.child('requests');
      var sender = 'Radu';
      var receivers = [
        {
          'name': 'Sam',
          'status': false
        }, {
          'name': 'Andrew',
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

  }]);
