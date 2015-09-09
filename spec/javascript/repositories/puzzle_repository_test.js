describe('The Puzzle Repository', function(){
	
	beforeEach(function() {
	  this.injectDependencies('PuzzleRepository', '$httpBackend', 'Http');
	});

    describe('#all', function() {
		fit('returns the fetched puzzles to the caller via a GET request to /api/puzzles', function() {
			this.$httpBackend.whenGET('/api/puzzles').respond(this.Http.succeedToMakeRequest('some-response'));
			var response = this.PuzzleRepository.all();
			this.$httpBackend.flush();
			expect(response).toEqual('some-response');
		});
    });
});

