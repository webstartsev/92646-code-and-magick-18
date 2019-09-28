'use strict';

(function () {
  window.utils = {
    getMaxOfArray: function (numArray) {
      var max = 0;
      for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > max) {
          max = numArray[i];
        }
      }
      return max;
    },
    getRandomArbitrary: function (min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }
  };
})();
