angular.module('remote.config', [])

.factory('config', [function () {
  var self = this;

  // API call:
  // api.openweathermap.org/data/2.5/forecast/daily?q={city name},{country code}&cnt={cnt}
  // self.baseURL = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=Rize,tr&mode=xml&units=metric&cnt=3';
  self.baseURL = 'http://api.openweathermap.org/data/2.5/forecast/daily?';

  self.weatherList = {
    url: '',
    city: '',
    country: '',
    day: ''
  };


  return self;
}]);
