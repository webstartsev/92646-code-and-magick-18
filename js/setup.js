'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var LASTNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
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

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open-icon');
var setupClose = setup.querySelector('.setup-close');

var setupUserName = setup.querySelector('.setup-user-name');

var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');

var getRandomArbitrary = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};
var getRandomFromArray = function (array) {
  return array[getRandomArbitrary(0, array.length - 1)];
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    hideSetup();
  }
};

// Показываем настройки
var showSetup = function () {
  setup.classList.remove('hidden');
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

// Создаем объект волшебников
var createWizards = function (names, lastnames, coatColor, eyesColor) {
  var indexName = getRandomArbitrary(0, names.length - 1);
  var indexLastname = getRandomArbitrary(0, lastnames.length - 1);

  var wizard = {
    name: names[indexName] + ' ' + lastnames[indexLastname],
    coatColor: getRandomFromArray(coatColor),
    eyesColor: getRandomFromArray(eyesColor)
  };

  return wizard;
};

// Заполняем шаблон данными волшебника
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');
var fillWizardTemplate = function (wizard) {
  var template = wizardTemplate.cloneNode(true);

  template.querySelector('.setup-similar-label').textContent = wizard.name;
  template.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  template.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return template;
};

// Отрисовка волшебников
var renderWizard = function () {
  var wizardList = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();
  for (var i = 1; i <= COUNT_WIZARDS; i++) {
    var wizard = createWizards(NAMES, LASTNAMES, COAT_COLORS, EYES_COLOR);
    var template = fillWizardTemplate(wizard);
    fragment.appendChild(template);
  }
  wizardList.appendChild(fragment);
};

// События показа настроек
setupOpen.addEventListener('click', function () {
  showSetup();
});
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    showSetup();
  }
});
// События скрытия настроек
setupClose.addEventListener('click', function () {
  hideSetup();
});
setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    hideSetup();
  }
});

setupUserName.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.stopPropagation();
  }
});
// События изменения цветов волшебника
wizardCoat.addEventListener('click', function () {
  var coatColor = getRandomFromArray(COAT_COLORS);
  wizardCoat.style.fill = coatColor;
  setup.querySelector('input[name=coat-color]').value = coatColor;
});
wizardEyes.addEventListener('click', function () {
  var eyesColor = getRandomFromArray(EYES_COLOR);
  wizardEyes.style.fill = eyesColor;
  setup.querySelector('input[name=eyes-color]').value = eyesColor;
});
wizardFireball.addEventListener('click', function () {
  var fireballColor = getRandomFromArray(FIREBALL_COLORS);
  wizardFireball.style.background = fireballColor;
  setup.querySelector('input[name=fireball-color]').value = fireballColor;
});

// Основнная программа
showSetupSimilar();
renderWizard();
