describe('SoSafeController', function() {
  var ctrl;

  beforeEach(module('SoSafe'));

  beforeEach(inject(function($controller){
    ctrl = $controller('SoSafeController');
  }));
 
  it('initialize with an emtpy request', function() {
   expect(ctrl.safeReq).toBeUndefined(); 
  });

});
