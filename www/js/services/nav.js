angular.module('services.nav', [])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('Dash', {
    url: '/dash',
    templateUrl: 'views/dash.html',
    controller: 'DashCtrl'
  })
  $urlRouterProvider.otherwise('/dash');
})
