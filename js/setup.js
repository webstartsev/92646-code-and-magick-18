'use strict';
(function () {

  var SETUP_COORD_X = '50';
  var SETUP_COORD_Y = '80';

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open-icon');
  var setupClose = setup.querySelector('.setup-close');

  var setupUserName = setup.querySelector('.setup-user-name');

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

  var succesHandler = function (data) {
    window.render.wizards(data);
    showSetupSimilar();
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.classList.add('status-error');
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  // Получаем данные
  window.backend.load(window.config.URL_DATA, succesHandler, errorHandler);

  // Отправляем данные
  var setupForm = document.querySelector('.setup-wizard-form');
  setupForm.addEventListener('submit', function (evt) {
    window.backend.save(window.config.URL_SAVE, new FormData(setupForm), hideSetup, errorHandler);

    evt.preventDefault();
  });
})();
