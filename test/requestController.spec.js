describe('requestController', function() {
  var ctrl, requestData;

  beforeEach(module('SoSafe', 'firebase'));

  beforeEach(inject(function($controller){
    ctrl = $controller('RequestController');
  }));

  beforeEach(function(){
    requestData = {
      'sender': 'Radu',
      'receivers': ['Sam', 'Andrew']
    };
  });

  it('adds a request to firebase/requests', function() {
    var requestsRef = new Firebase('https://sosafe.firebaseio.com');
    ctrl.addRequest();
    requests = requestsRef;
    //console.log(requestsRef.key());
    expect(requests).toEqual(requestData);
  });

});
