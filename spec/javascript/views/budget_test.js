describe('The Splash Page', function () {
    var view;

    beforeEach(function () {
        this.injectDependencies('renderTemplate', '$scope');
        view = this.renderTemplate('splash.html', this.$scope);
    });

    describe('The button to go to all the puzzles', function () {
        it('it entitled "Go to Puzzles"', function () {
            expect(view.find('button')).toContainText('Go to Puzzles');
        });
    });
});
