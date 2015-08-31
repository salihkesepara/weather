angular.module('request.getWeatherList', [])

.factory('getWeatherList', ['config', 'http', 'months', function (config, http, months) {
  var self = this;

  self.run = function(city)  {
    var req = config.weatherList;
    req.city = city;
    req.country = 'tr';
    req.day = 3;
    req.url = config.baseURL + 'q=' + req.city + ',' + req.country + '&mode=json&units=metric&cnt=' + req.day + '';

    function parserCallBack(result) {
      // Parse here!
      var data = {
        city: result.city.name,
        temp: [],
      };
      result.list.forEach(function(item) {
        var date = new Date(new Date(item.dt * 1000).toGMTString()),
        day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
        month = months[date.getMonth()],
        year = date.getFullYear();

        data.temp.push({
          temp: item.temp.day,
          date: day + ' ' + month + ' ' + year
        });
      });
      return data;
    }

    return http.run(req).then(parserCallBack);
  };

  return self;
}]);
