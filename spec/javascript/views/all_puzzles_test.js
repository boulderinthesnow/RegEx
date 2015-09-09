describe('The All Puzzles Page', function() {
  var view;

  beforeEach(function() {
    this.injectDependencies('$scope', 'PuzzleRepository', 'renderTemplate', 'Http');
    var cannedResponse = {puzzles: [{name:'puzzleOne'},{name:'puzzleTwo'}]};
    spyOn(this.PuzzleRepository, 'all').and.returnValue(this.Http.succeedToMakeRequest(cannedResponse))
    view = this.renderTemplate('all.html', this.$scope);
  });

  it('asks the puzzles repository for all of the puzzles', function() {
    expect(this.PuzzleRepository.all).toHaveBeenCalled();
  });

  it('renders the puzzles returned by the repository', function() {
    expect(view).toContainText("puzzleOne");
    expect(view).toContainText("puzzleTwo");
  });
});
