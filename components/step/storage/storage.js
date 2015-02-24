(function () {
  'use strict';

  angular
    .module('step.storage', ['step'])
    .config(config);

  config.$inject = ['$provide'];


  function config($provide) {
    $provide.decorator('step', decorate);

    decorate.$inject = ['$delegate', 'stepStorage'];


    function decorate(step, storage) {
      var original;

      if (storage.support()) {
        original = {
          init: step.init,
          next: step.next
        };
        step.init = init;
        step.next = next;
      }

      return step;


      function init() {
        original.init();
        storage.load(step.data(), step.sequence());
      }

      function next() {
        original.next();
        storage.save(step.data(), step.sequence());
      }
    }
  }
}());
