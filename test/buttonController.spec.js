describe('ButtonController', function(){

  beforeEach(module('SoSafe'));

  beforeEach(inject(function($controller){
    ctrl = $controller('ButtonController');
  }));

  it('has a function that sends request', function(){
    expect(ctrl.sendRequest).toBeDefined();
  });
});
