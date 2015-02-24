(function () {
  'use strict';

  angular.module('aux.autoInputDirective', [])
    .directive('auxAutoInput', auxAutoInput);

  function auxAutoInput() {
    var d;

    d = {
      restrict: 'A',
      scope: {auxAutoInput: '@'},
      require: 'ngModel',
      link: link
    };

    return d;


    function link(scope, el, attrs, ctrl) {
      var positions, oldVal;

      positions = getPositions(scope.auxAutoInput);
      el.on('focus', inputFirst);
      ctrl.$parsers.unshift(input);


      function getPositions(template) {
        return template.slice(1).split(template.slice(0, 1));
      }

      function inputFirst() {
        var firstVal;

        if (ctrl.$isEmpty(ctrl.$viewValue)) {
          oldVal = '';
          firstVal = positions[0];

          if (firstVal) {
            ctrl.$setViewValue(firstVal);
            ctrl.$render();

            //IE fix cursor position
            el[0].setSelectionRange(1, 1);
          }
        }
        else {
          oldVal = ctrl.$viewValue;
        }
      }

      function input(viewVal) {
        var p, newVal;

        if (oldVal.length < viewVal.length) {
          p = viewVal.length;

          if (p < positions.length && positions[p]) {
            newVal = viewVal + positions[p];
            ctrl.$setViewValue(newVal);
            ctrl.$render();
          }
        }
        oldVal = ctrl.$viewValue;

        return ctrl.$viewValue;
      }
    }
  }
}());
