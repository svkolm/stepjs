(function () {
  'use strict';

  angular
    .module('stubService', [])
    .factory('stubService', stubService);

  stubService.$inject = ['$window'];


  function stubService($window) {
    var s;

    s = {reg: reg};

    return s;


    function reg(data) {
      var message;

      message = 'Sending registration data:\n';

      for (var p in data) {
        if (data.hasOwnProperty(p)) {
          message = message + p + '=' + data[p] + '\n';
        }
      }
      $window.alert(message);
    }
  }
}());
