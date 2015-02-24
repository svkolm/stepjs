(function () {
  'use strict';

  angular
    .module('reg.personal')
    .controller('RegPersonal', RegPersonal);

  RegPersonal.$inject = ['step'];


  function RegPersonal(step) {
    var ctrl = this;

    ctrl.data = step.data();
    ctrl.next = step.next;
  }
}());
