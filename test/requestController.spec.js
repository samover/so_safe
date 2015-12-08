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
    ctrl.addRequest();
    expect(ctrl.requests).toContain(requestData);
  });

});
