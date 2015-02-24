(function () {
  'use strict';

  angular
    .module('step.nav')
    .directive('stepNavRef', stepNavRef);

  stepNavRef.$inject = ['step'];


  function stepNavRef(step) {
    var d;

    d = {
      require: '^stepNav',
      restrict: 'E',
      scope: {},
      link: link,
      transclude: true,
      replace: true,
      template:
        '<div class="step-nav-ref">' +
          '<a ng-if="stepNavRef.isAccessible()" href="#{{stepNavRef.path()}}" ng-transclude></a>' +
          '<span ng-if="stepNavRef.isCurrent()" class="current" ng-transclude></span>' +
          '<span ng-if="stepNavRef.isInaccessible()" ng-transclude></span>' +
        '</div>'
    };

    return d;


    function link(scope, el, attrs, stepNav) {
      var n;

      n = index() + 1;

      scope.stepNavRef = {
        path: path,
        isCurrent: isCurrent,
        isAccessible: isAccessible,
        isInaccessible: isInaccessible
      };

      if (stepNav.isInline()) {
        el.css({width: width()});
      }


      function index() {
        return Array.prototype.indexOf
          .call(el.parent().children(), el[0]);
      }

      function path() {
        return step.path(n);
      }

      function isCurrent() {
        return n === step.current();
      }

      function isAccessible() {
        return n < step.current();
      }

      function isInaccessible() {
        return n > step.current();
      }

      function width() {
        return 100 / step.last() + '%';
      }
    }
  }
}());
