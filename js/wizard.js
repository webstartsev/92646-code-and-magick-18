'use strict';

(function () {
  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var EYES_COLOR = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var setup = document.querySelector('.setup');

  var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');

  var wizardHiddenInputCoat = setup.querySelector('input[name=coat-color]');
  var wizardHiddenInputEyes = setup.querySelector('input[name=eyes-color]');
  var wizardHiddenInputFireball = setup.querySelector('input[name=fireball-color]');

  // События изменения цветов волшебника
  wizardCoat.addEventListener('click', function () {
    var color = window.utils.getRandomFromArray(COAT_COLORS);
    wizardCoat.style.fill = color;
    wizardHiddenInputCoat.value = color;
    window.wizard.onCoatChange(color);
  });
  wizardEyes.addEventListener('click', function () {
    var color = window.utils.getRandomFromArray(EYES_COLOR);
    wizardEyes.style.fill = color;
    wizardHiddenInputEyes.value = color;
    window.wizard.onEyesChange(color);
  });
  wizardFireball.addEventListener('click', function () {
    var color = window.utils.getRandomFromArray(FIREBALL_COLORS);
    wizardFireball.style.background = color;
    wizardHiddenInputFireball.value = color;
  });

  window.wizard = {
    onCoatChange: function (color) {
      return color;
    },
    onEyesChange: function (color) {
      return color;
    }
  };
})();
