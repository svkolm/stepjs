(function () {
  'use strict';

  angular
    .module('step')
    .provider('step', StepProvider);


  function StepProvider() {
    var pr = this, sequences = {};

    pr.step = step;
    pr.$get = getStep;

    getStep.$inject = ['$location'];


    function extractSequence(path) {
      return path.split('/').slice(-2, -1)[0];
    }

    function hasSequence(sequence) {
      return sequences[sequence] !== undefined;
    }

    function step(path, nextPath) {
      var sequence;

      sequence = extractSequence(path);

      if (!hasSequence(sequence)) {
        sequences[sequence] = [];
      }

      if (nextPath) {
        sequences[sequence].splice(
          sequences[sequence].indexOf(nextPath), 0, path);
      }
      else {
        sequences[sequence].push(path);
      }

      return pr;
    }

    function getStep($location) {
      var step, sequence, numbers, data, forms;

      step = {
        start: start,
        init: init,
        check: check,
        clear: clear,
        sequence: getSequence,
        next: next,
        last: last,
        path: path,
        current: current,
        data: getData,
        form: putForm
      };

      return step;


      function start(failure) {
        var newSequence;

        newSequence = extractSequence($location.path());

        if (hasSequence(newSequence)) {

          if (sequence !== newSequence) {
            sequence = newSequence;
            step.init();
          }

          step.check(failure);
        }
        else {
          if (sequence) {
            sequence = null;
            step.clear();
          }
        }
      }

      function init() {
        var first = 1, n;

        clear();

        for (n = first; n <= last(); n++) {
          numbers[path(n)] = n;
        }

        $location.path(path(first));
      }

      function clear() {
        numbers = {};
        data = {};
        forms = {};
      }

      function getSequence() {
        return sequence;
      }

      function last() {
        return sequences[getSequence()].length;
      }

      function path(n) {
        return sequences[getSequence()][n - 1];
      }

      function current() {
        return numbers[$location.path()];
      }

      function next() {
        $location.path(path(current() + 1));
      }

      function getData() {
        return data;
      }

      function putForm(form) {
        forms[current()] = form;
      }

      function check(failure) {
        var targetStepN, fail, n;

        targetStepN = current();

        if (targetStepN) {
          fail = false;

          for (n = 1; n < targetStepN; n++) {
            fail = !checkForm(n);

            if (fail) {
              break;
            }
          }

          if (fail) {
            failure();
          }
        }


        function checkForm(n) {
          var form, check = true;

          form = forms[n];

          if (form !== null) {

            if (form) {
              check = form.$valid;
            }
            else {
              check = false;
            }
          }

          return check;
        }
      }
    }
  }
}());
