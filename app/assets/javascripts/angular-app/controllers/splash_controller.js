budget.controller('SplashController', function($scope, $state) {
  $scope.goToAllPuzzles = function() {
    $state.go('all');
  };
});
