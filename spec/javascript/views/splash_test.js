describe('The Splash Page', function() {
  var view;

  beforeEach(function() {
    this.injectDependencies('renderTemplate', '$scope', '$state');
    view = this.renderTemplate('splash.html', this.$scope);
  });

  describe('The button to go to all the puzzles', function() {
    it('it entitled "Go to Puzzles"', function() {
      expect(view.find('button')).toContainText('Go to Puzzles');
    });

    it('takes the user to the All Puzzles page', function() {
      view.find('button').click();
      expect(this.$state.current.name).toEqual('all');
      expect(this.$state.current.url).toEqual('/all');
    });
  });
});
