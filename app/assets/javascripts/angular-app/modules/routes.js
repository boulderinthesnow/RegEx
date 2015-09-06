budget.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('/', {
        url: '/',
        templateUrl: 'splash.html'
    });

    $stateProvider.state('all', {
      url: '/all',
      templateUrl: 'all.html'
    });
});
