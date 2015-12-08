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

    it('receiving a response changes the buttons message', function(){
      ctrl.sendRequest();
        expect(ctrl.status.message).toEqual('Waiting for response');
      ctrl.receiveResponse();
        expect(ctrl.status.message).toEqual('I am ok!');
    });
  });
  describe('#changeStatus', function(){
    it('changes the status of the button', function(){
      spyOn(ctrl, 'sendRequest');
      expect(ctrl.status.message).toEqual('Are you ok?');
      ctrl.changeStatus();
      expect(ctrl.status.message).toEqual('Waiting for response');
      expect(ctrl.sendRequest).toHaveBeenCalled();
    });
  });
});
