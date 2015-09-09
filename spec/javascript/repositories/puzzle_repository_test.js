describe('The Puzzle Repository', function(){
	
	beforeEach(function() {
	  this.injectDependencies('PuzzleRepository', '$httpBackend', 'Http');
	});

    describe('#all', function() {
		it('returns the fetched puzzles to the caller via a GET request to /api/puzzles', function() {
			var response;
			spyOn(this.PuzzleRepository, 'all').and.returnValue(this.Http.succeedToMakeRequest('some-response'));
			this.PuzzleRepository.all().success(function(stuff) {
				response = stuff;
			});
			expect(response).toEqual('some-response');
		});
	});
});

