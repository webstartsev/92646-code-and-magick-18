'use strict';

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
var COUNT_WIZARDS = 4;

var getRandomArbitrary = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

// Показываем настройки
var showSetup = function () {
  document.querySelector('.setup').classList.remove('hidden');
};

// Показываем список волшебников
var showSetupSimilar = function () {
  document.querySelector('.setup-similar').classList.remove('hidden');
};

// Создаем объект волшебников
var createWizards = function (names, lastnames, coatColor, eyesColor) {
  var indexName = getRandomArbitrary(0, names.length - 1);
  var indexLastname = getRandomArbitrary(0, lastnames.length - 1);
  var indexCoatColor = getRandomArbitrary(0, coatColor.length - 1);
  var indexEyesColor = getRandomArbitrary(0, eyesColor.length - 1);

  var wizard = {
    name: names[indexName] + ' ' + lastnames[indexLastname],
    coatColor: coatColor[indexCoatColor],
    eyesColor: eyesColor[indexEyesColor]
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

// Основнная программа
showSetup();
showSetupSimilar();
renderWizard();
