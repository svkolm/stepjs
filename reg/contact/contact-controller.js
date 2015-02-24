(function () {
  'use strict';

  angular
    .module('reg.contact')
    .controller('RegContact', RegContact);

  RegContact.$inject = ['step'];


  function RegContact(step) {
    var ctrl = this;

    ctrl.data = step.data();
    ctrl.next = step.next;
  }
}());
