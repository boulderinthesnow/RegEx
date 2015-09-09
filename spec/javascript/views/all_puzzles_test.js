describe('The All Puzzles Page', function() {
  beforeEach(function() {
    this.injectDependencies('$scope', 'PuzzleRepository', 'renderTemplate');
  });

  it('asks the puzzles repository for all of the puzzles', function() {
    spyOn(this.PuzzleRepository, 'all');
    this.renderTemplate('all.html', this.$scope);
    expect(this.PuzzleRepository.all).toHaveBeenCalled();
  });

  it('renders the puzzles returned by the repository', function() {
    spyOn(this.PuzzleRepository, 'all').and.returnValue({puzzles: [{name:'puzzleOne'},{name:'puzzleTwo'}]});    
    var view = this.renderTemplate('all.html', this.$scope);
    expect(view).toContainText("puzzleOne");
    expect(view).toContainText("puzzleTwo");
  });

 });
