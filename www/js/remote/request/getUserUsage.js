angular.module('request.getUserUsage', [])

.factory('getUserUsage', ['config', 'http', function (config, http) {
  var self = this;

  self.run = function(userName, pass)  {
    // config.login.data.UserName = userName;
    // config.login.data.Password = pass;
    //
    // function parserCallBack(result) {
    //   // Parse here!
    //   return result.ApiKey;
    // }
    //
    // return http.request(config.login).then(parserCallBack);
  };

  return self;
}]);
