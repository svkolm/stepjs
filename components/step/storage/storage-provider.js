(function () {
  'use strict';

  angular
    .module('step.storage')
    .provider('stepStorage', StepStorageProvider);


  function StepStorageProvider() {
    var pr = this,
        storageKey = 'STEP-STORAGE-DATA',
        excludes = [];

    pr.key = setKey;
    pr.exclude = putExclude;
    pr.$get = getStepStorage;

    getStepStorage.$inject = ['$window'];


    function setKey(key) {
      storageKey = key;

      return pr;
    }

    function putExclude(exclude) {
      excludes.push(exclude);

      return pr;
    }

    function getStepStorage($window) {
      var storage, ls;

      ls = $window.localStorage;

      storage = {
        support: support,
        save: save,
        load: load,
        clear: clear
      };

      return storage;


      function support() {
        return ls ? true : false;
      }

      function getKey(key) {
        return key ? storageKey + '@' + key : storageKey;
      }

      function load(obj, key) {
        var jsonData, data, p;

        key = getKey(key);

        jsonData = ls[key];

        if (jsonData) {
          data = JSON.parse(jsonData);

          for (p in data) {
            if (data.hasOwnProperty(p) &&
              obj[p] === undefined) {
                obj[p] = data[p];
            }
          }
        }
      }

      function save(obj, key) {
        var data = {}, p;

        key = getKey(key);

        for (p in obj) {
          if (obj.hasOwnProperty(p) &&
            typeof obj[p] !== 'function' &&
            obj[p] !== '' &&
            excludes.indexOf(p) < 0) {
              data[p] = obj[p];
          }
        }
        ls[key] = JSON.stringify(data);
      }

      function clear(key) {
        ls.removeItem(getKey(key));
      }
    }
  }
}());
