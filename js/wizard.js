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
    var coatColor = window.utils.getRandomFromArray(COAT_COLORS);
    wizardCoat.style.fill = coatColor;
    wizardHiddenInputCoat.value = coatColor;
  });
  wizardEyes.addEventListener('click', function () {
    var eyesColor = window.utils.getRandomFromArray(EYES_COLOR);
    wizardEyes.style.fill = eyesColor;
    wizardHiddenInputEyes.value = eyesColor;
  });
  wizardFireball.addEventListener('click', function () {
    var fireballColor = window.utils.getRandomFromArray(FIREBALL_COLORS);
    wizardFireball.style.background = fireballColor;
    wizardHiddenInputFireball.value = fireballColor;
  });
})();
