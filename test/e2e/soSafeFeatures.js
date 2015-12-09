describe('So Safe Features', function() {

  beforeEach(function(){
    browser.get('http://localhost:9000');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('So Safe');
  });

  describe('logging in', function(){
    element(by.model('data.usernam')).sendKeys('mari-ass');
    element(by.css('button')).click();
    expect(element(by.id("the_button")).getText()).toEqual("Are you ok?");
  });
  describe("clicking the button", function(){
    it("starts with a default message", function(){
      expect(element(by.id("the_button")).getText()).toEqual("Are you ok?")
    });

    it("changes to pending when a request is sent", function(){
      element(by.id('the_button')).click();
      expect(element(by.id('the_button')).getText()).toEqual('Waiting for response');
    });
  });

  describe("receiving safety confirmation", function(){

    xit('changes pending status to confirmed',function(){
      element(by.id('the_button')).click();
      element(by.id('the_button')).evaluate('btnCtrl.receiveResponse()');
      expect(element(by.id('the_button')).getText()).toEqual('I am ok!');
    });
  });
});
