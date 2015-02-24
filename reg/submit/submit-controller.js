(function () {
  'use strict';

  angular
    .module('reg.submit')
    .controller('RegSubmit', RegSubmit);

  RegSubmit.$inject = ['step', 'stubService', '$location'];


  function RegSubmit(step, service, $location) {
    var ctrl = this,
        data = step.data();

    ctrl.data = data;
    ctrl.submit = submit;
    data.confirmation = false;


    function submit() {
      if (data.confirmation) {
        service.reg(data);
        $location.path('/');
      }
    }
  }
}());
