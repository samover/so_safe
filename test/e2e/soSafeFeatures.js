describe('Are You Save Features', function() {
  it('has a title', function() {
    browser.get('http://localhost:9000');

    expect(browser.getTitle()).toEqual('So Safe');
  });
});
