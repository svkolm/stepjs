(function () {
  'use strict';

  angular
    .module('reg.personal', [
      'ngRoute',
      'step',
      'aux.autoInputDirective',
      'reg.contact'
    ])
    .constant('REG_PERSONAL_PATH', '/reg/personal')
    .config(regPersonalConfig);

  regPersonalConfig.$inject = [
    '$routeProvider',
    'REG_PERSONAL_PATH',
    'stepProvider',
    'REG_CONTACT_PATH'
  ];


  function regPersonalConfig(routeProvider,
                             path,
                             stepProvider,
                             nextPath) {
    routeProvider.when(path, {
      templateUrl: 'reg/personal/personal.html',
      controller: 'RegPersonal',
      controllerAs: 'regPersonal'
    });

    stepProvider.step(path, nextPath);
  }
}());
