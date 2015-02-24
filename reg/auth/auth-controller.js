(function () {
  'use strict';

  angular
    .module('reg.auth')
    .controller('RegAuth', RegAuth);

  RegAuth.$inject = ['step'];


  function RegAuth(step) {
    var ctrl = this,
      data = step.data();

    ctrl.data = data;
    data.password = undefined;
    ctrl.next = step.next;
  }
}());
