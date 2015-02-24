(function () {
  'use strict';

  angular
    .module('reg.submit', [
      'ngRoute',
      'step',
      'stubService'
    ])
    .constant('REG_SUBMIT_PATH', '/reg/submit')
    .config(regSubmitConfig);

  regSubmitConfig.$inject = [
    '$routeProvider',
    'REG_SUBMIT_PATH',
    'stepProvider'
  ];


  function regSubmitConfig(routeProvider,
                           path,
                           stepProvider) {
    routeProvider.when(path, {
      templateUrl: 'reg/submit/submit.html',
      controller: 'RegSubmit',
      controllerAs: 'regSubmit'
    });

    stepProvider.step(path);
  }
}());
