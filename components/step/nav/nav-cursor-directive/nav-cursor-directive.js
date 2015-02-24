(function () {
  'use strict';

  angular
    .module('step.nav')
    .directive('stepNavCursor', stepNavCursor);

  stepNavCursor.$inject = ['step','$animate'];


  function stepNavCursor(step, $animate) {
    var d;

    d = {
      require: '^stepNav',
      restrict: 'E',
      scope: {},
      link: link,
      replace: true,
      template: '<div class="step-nav-cursor"></div>'
    };

    return d;


    function link(scope, el, attrs, stepNav) {
      scope.$on('$locationChangeSuccess', indicateStep);
      move();


      function indicateStep() {
        if (stepNav.isActive()) {
          move();
        }
      }

      function move() {
        var moveClass = 'move';

        el.removeClass(moveClass);
        $animate.addClass(el, moveClass, {to: position()});


        function position() {
          return stepNav.isInline() ? {left: shift()} : {top: shift()};


          function shift() {
            return (step.current() - 0.5) / step.last() * 100 + '%';
          }
        }
      }
    }
  }
}());
