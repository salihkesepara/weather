angular.module('remote.config', [])

.factory('config', [function () {
  var self = this;
  // self.baseURL = 'https://staging.ofisim.com/REST/';
  //
  // self.login = {
  //   method: 'POST',
  //   url: self.baseURL + 'Public/Login',
  //   data: {
  //     IsPlain: true,
  //     Password: '',
  //     UserName: ''
  //   }
  // };


  return self;
}]);
