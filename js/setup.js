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
  var COUNT_WIZARDS = 4;
  var SETUP_COORD_X = '50';
  var SETUP_COORD_Y = '80';

  var URL = 'https://js.dump.academy/code-and-magick/data';

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open-icon');
  var setupClose = setup.querySelector('.setup-close');

  var setupUserName = setup.querySelector('.setup-user-name');

  var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');

  var wizardHiddenInputCoat = setup.querySelector('input[name=coat-color]');
  var wizardHiddenInputEyes = setup.querySelector('input[name=eyes-color]');
  var wizardHiddenInputFireball = setup.querySelector('input[name=fireball-color]');

  var onPopupEscPress = function (evt) {
    window.utils.onEscPress(evt, hideSetup);
  };

  var setSetupDafaultPosition = function () {
    setup.style.left = SETUP_COORD_X + '%';
    setup.style.top = SETUP_COORD_Y + 'px';
  };

  // Показываем настройки
  var showSetup = function () {
    setup.classList.remove('hidden');
    setSetupDafaultPosition();
    document.addEventListener('keydown', onPopupEscPress);
  };

  // Закрываем настройки
  var hideSetup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  // Показываем список волшебников
  var showSetupSimilar = function () {
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  // Заполняем шаблон данными волшебника
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');
  var fillWizardTemplate = function (wizard) {
    var template = wizardTemplate.cloneNode(true);

    template.querySelector('.setup-similar-label').textContent = wizard.name;
    template.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    template.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return template;
  };

  // Отрисовка волшебников
  var renderWizards = function (wizards) {
    var wizardList = document.querySelector('.setup-similar-list');
    var fragment = document.createDocumentFragment();
    for (var i = 1; i <= COUNT_WIZARDS; i++) {
      var template = fillWizardTemplate(wizards[window.utils.getRandomArbitrary(0, wizards.length - 1)]);
      fragment.appendChild(template);
    }
    wizardList.appendChild(fragment);
  };

  // События показа настроек
  setupOpen.addEventListener('click', function () {
    showSetup();
  });
  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.utils.ENTER_KEYCODE) {
      showSetup();
    }
  });
  // События скрытия настроек
  setupClose.addEventListener('click', function () {
    hideSetup();
  });
  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.utils.ENTER_KEYCODE) {
      hideSetup();
    }
  });

  setupUserName.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.utils.ESC_KEYCODE) {
      evt.stopPropagation();
    }
  });
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

  var succesHandler = function (wizards) {
    renderWizards(wizards);
    showSetupSimilar();
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.classList.add('status-error');
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(URL, succesHandler, errorHandler);
})();
