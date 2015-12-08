describe('ButtonController', function(){
  var ctrl;
  beforeEach(module('SoSafe'));

  beforeEach(inject(function($controller){
    ctrl = $controller('ButtonController');
  }));

  describe('#send request', function(){

    it('has a function that sends request', function(){
      expect(ctrl.sendRequest).toBeDefined();
    });

    it('making a request changes the buttons message', function(){
      ctrl.sendRequest();
      expect(ctrl.status.message).toEqual('Waiting for response');
    });
  });

  describe('#receive response', function(){
    it('has a function that receives request',function(){
      expect(ctrl.receiveResponse).toBeDefined();
    });

    it('receiving a response changes the buttons message', function(){
      ctrl.sendRequest();
        expect(ctrl.status.message).toEqual('Waiting for response');
      ctrl.receiveResponse();
        expect(ctrl.status.message).toEqual('I am ok!');
    });
  });
});
