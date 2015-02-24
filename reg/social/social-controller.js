(function () {
  'use strict';

  angular
    .module('reg.social')
    .controller('RegSocial', RegSocial);

  RegSocial.$inject = ['step'];


  function RegSocial(step) {
    var ctrl = this;

    ctrl.data = step.data();
    ctrl.next = step.next;
  }
}());
