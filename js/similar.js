'use strict';

(function () {
  var coatColor;
  var eyesColor;

  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var succesHandler = function (data) {
    wizards = data;
    updateSimilar();
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.classList.add('status-error');
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var updateSimilar = function () {
    window.render.wizards(wizards.slice().sort(function (left, right) {
      return getRank(right) - getRank(left);
    }));
  };

  window.wizard.onCoatChange = window.utils.debounce(function (color) {
    coatColor = color;
    updateSimilar();
  });

  window.wizard.onEyesChange = window.utils.debounce(function (color) {
    eyesColor = color;
    updateSimilar();
  });

  // Получаем данные
  window.backend.load(window.config.URL_DATA, succesHandler, errorHandler);
})();
