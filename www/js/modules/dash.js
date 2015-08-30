angular.module('modules.dash', [])

.controller('DashCtrl', ['$scope', '$ionicModal', function ($scope, $ionicModal) {

  $ionicModal.fromTemplateUrl('addLocation.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    $scope.addLocation = modal;
  });

  $scope.openAddLocation = function() {
    $scope.addLocation.show();
  }

  $scope.cancelAddLocation = function () {
    $scope.addLocation.hide();
  }

  $scope.doneAddLocation = function() {
    console.log('Done');
    $scope.addLocation.hide();
  }

}])
