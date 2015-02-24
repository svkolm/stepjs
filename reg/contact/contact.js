(function () {
  'use strict';

  angular
    .module('reg.contact', [
      'ngRoute',
      'step',
      'aux.autoInputDirective',
      'reg.social'
    ])
    .constant('REG_CONTACT_PATH', '/reg/contact')
    .config(regContactConfig);

  regContactConfig.$inject = [
    '$routeProvider',
    'REG_CONTACT_PATH',
    'stepProvider',
    'REG_SOCIAL_PATH'
  ];


  function regContactConfig(routeProvider,
                            path,
                            stepProvider,
                            nextPath) {
    routeProvider.when(path, {
      templateUrl: 'reg/contact/contact.html',
      controller: 'RegContact',
      controllerAs: 'regContact'
    });

    stepProvider.step(path, nextPath);
  }
}());
