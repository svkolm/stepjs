(function () {
  'use strict';

  angular.module('aux.autoScrollDirective', [])
    .directive('auxAutoScroll', auxAutoScroll);

  auxAutoScroll.$inject = ['$anchorScroll'];

  function auxAutoScroll($anchorScroll) {
    var d;

    d = {
      restrict: 'AE',
      link: link
    };

    return d;


    function link(scope) {
      scope.$on('$locationChangeSuccess', autoScroll);


      function autoScroll() {
        $anchorScroll();
      }
    }
  }
}());
