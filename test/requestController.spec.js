describe('requestController', function() {
  var ctrl, requestData;

  beforeEach(module('SoSafe'));

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
    var requestsRef = new Firebase('https://sosafe.firebaseio.com/requests');
    requestsRef.set({ name: 'radu', age: 35 });
    console.log(requestsRef.key());
    ctrl.addRequest();
    expect(requests).toContain(requestData);
  });

});
