'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.utils = {
    ESC_KEYCODE: ESC_KEYCODE,
    ENTER_KEYCODE: ENTER_KEYCODE,
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
    },
    getRandomFromArray: function (array) {
      return array[this.getRandomArbitrary(0, array.length - 1)];
    },
    onEscPress: function (evt, action) {
      if (evt.keyCode === this.ESC_KEYCODE) {
        action();
      }
    }
  };
})();
