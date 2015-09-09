budget.service('PuzzleRepository', function($http) {
	return {
		all: function() {
            return $http.get('/api/puzzles');
		}
	};
});
