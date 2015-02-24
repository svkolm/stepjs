(function () {
  'use strict';

  angular
    .module('reg.social', [
      'ngRoute',
      'step',
      'reg.submit'
    ])
    .constant('REG_SOCIAL_PATH', '/reg/social')
    .config(regSocialConfig);

  regSocialConfig.$inject = [
    '$routeProvider',
    'REG_SOCIAL_PATH',
    'stepProvider',
    'REG_SUBMIT_PATH'
  ];


  function regSocialConfig(routeProvider,
                           path,
                           stepProvider,
                           nextPath) {
    routeProvider.when(path, {
      templateUrl: 'reg/social/social.html',
      controller: 'RegSocial',
      controllerAs: 'regSocial'
    });

    stepProvider.step(path, nextPath);
  }
}());
