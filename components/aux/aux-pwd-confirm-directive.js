(function () {
  'use strict';

  angular.module('aux.pwdConfirmDirective', [])
    .directive('auxPwdConfirm', auxPwdConfirm);

  function auxPwdConfirm() {
    var d;

    d = {
      restrict: 'A',
      scope: {password: '=auxPwdConfirm'},
      require: 'ngModel',
      link: link
    };

    return d;


    function link(scope, el, attrs, ctrl) {
      scope.$watch('password', validatePasswordChange);
      ctrl.$parsers.push(validateConfirmChange);


      function validatePasswordChange(newVal) {
        validate(newVal, ctrl.$viewValue);
      }

      function validateConfirmChange(viewVal) {
        validate(scope.password, viewVal);
        return viewVal;
      }

      function validate(password, confirm) {
        ctrl.$setValidity('auxPwdConfirm',
            password === confirm);
      }
    }
  }
}());
