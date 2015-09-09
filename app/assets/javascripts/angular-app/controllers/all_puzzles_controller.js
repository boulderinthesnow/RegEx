budget.controller('AllPuzzlesController', function($scope, PuzzleRepository) {
  $scope.allPuzzles = PuzzleRepository.all();
  // .success(function(successfully_returned_data) {
  //   $scope.all_puzzles = successfully_returned_data;
  // }).failure(function() {

//   });
});


// console.log(JSON.stringify($scope.puzzles));