describe('ButtonController', function(){
  var ctrl;
  beforeEach(module('SoSafe'));

  beforeEach(inject(function($controller){
    ctrl = $controller('ButtonController');
  }));

  it('has a function that sends request', function(){
    expect(ctrl.sendRequest).toBeDefined();
  });

  it('making a request changes the buttons message', function(){
    ctrl.sendRequest();
    expect(ctrl.status.message).toEqual('Waiting for response');
  });
});
