(function () {
  'use strict';

  angular
    .module('step')
    .directive('stepForm', stepForm);

  stepForm.$inject = ['step'];


  function stepForm(step) {
    var d;

    d = {
      restrict: 'A',
      require: 'form',
      scope: {stepForm: '='},
      link: link
    };

    return d;


    function link(scope, el, attr, ctrl) {
      var form;

      form = scope.stepForm === false ? null : ctrl;
      step.form(form);
    }
  }
}());
