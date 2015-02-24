(function () {
  'use strict';

  angular
    .module('reg.auth', [
      'ngRoute',
      'step',
      'aux.pwdConfirmDirective',
      'reg.personal'
    ])
    .constant('REG_AUTH_PATH', '/reg/auth')
    .config(regAuthConfig);

  regAuthConfig.$inject = [
    '$routeProvider',
    'REG_AUTH_PATH',
    'stepProvider',
    'REG_PERSONAL_PATH'
  ];


  function regAuthConfig(routeProvider,
                         path,
                         stepProvider,
                         nextPath) {
    routeProvider.when(path, {
      templateUrl: 'reg/auth/auth.html',
      controller: 'RegAuth',
      controllerAs: 'regAuth'
    });

    stepProvider.step(path, nextPath);
  }
}());
