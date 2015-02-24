(function () {
  'use strict';

  angular
    .module('app', [
      'ngRoute',
      'ngAnimate',
      'step',
      'step.nav',
      'step.storage',
      'aux.autoScrollDirective',
      'reg.auth'
    ])
    .config(config);

  config.$inject = [
    '$routeProvider',
    'REG_AUTH_PATH',
    'stepStorageProvider'
  ];


  function config(routeProvider,
                  defaultPath,
                  stepStorageProvider) {
    routeProvider.otherwise({redirectTo: defaultPath});

    stepStorageProvider
      .key('APP-STEP-STORAGE-DATA')
      .exclude('password');
  }
}());
