(function () {
  'use strict';

  angular
    .module('step', [])
    .run(runStep);

  runStep.$inject = ['$rootScope', 'step'];


  function runStep($rootScope, step) {
    $rootScope.$on('$locationChangeStart', startStep);


    function startStep(event) {
      step.start(startFail);


      function startFail() {
        event.preventDefault();
      }
    }
  }
}());
