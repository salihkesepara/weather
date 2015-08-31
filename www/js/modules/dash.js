angular.module('modules.dash', [])

.controller('DashCtrl', ['$scope', '$ionicModal', '$ionicListDelegate', 'getWeatherList', 'cities', 'loading', function ($scope, $ionicModal, $ionicListDelegate, getWeatherList, cities, loading) {
  var selectedCities = [],
  maxCity = 5;
  $scope.data = [];
  $scope.cities = cities;

  $scope.locations = {
    txtCityName: '',
    defaultLocation: 'İstanbul'
  }

  $scope.selectLocation = function(city) {
    if (selectedCities.length < maxCity) {
      loading.start();
      getWeatherList.run(city).then(function(result) {
        selectedCities.push(city);
        $scope.data.push(result);
        $scope.addLocation.hide();
      }, function(err) {
        console.log(err);
        alert('Network error! Try again later.');
      }).finally(function() {
        loading.stop();
      });
    } else {
      // Alert!
      alert('You can add only ' + maxCity + ' city!');
      console.log('You can add only ' + maxCity + ' city!');
      $scope.addLocation.hide();
    }
  }

  $scope.deleteItem = function(index) {
    $scope.data.splice(index, 1);
    selectedCities.splice(index, 1);
  }

  // Add Location Page
  $ionicModal.fromTemplateUrl('addLocation.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    $scope.addLocation = modal;
  });

  $scope.openAddLocation = function() {
    $scope.locations.txtCityName = '';
    $scope.addLocation.show();
  }

  $scope.cancelAddLocation = function () {
    $scope.addLocation.hide();
  }
  // END

}])
