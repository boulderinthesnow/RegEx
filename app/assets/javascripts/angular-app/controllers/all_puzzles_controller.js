budget.controller('AllPuzzlesController', function ($scope, PuzzleRepository) {
    PuzzleRepository.all().success(function (data) {
        $scope.allPuzzles = data;
    });
});