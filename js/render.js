'use strict';

(function () {
  var COUNT_WIZARDS = 4;

  // Заполняем шаблон данными волшебника
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');
  var fillWizardTemplate = function (wizard) {
    var template = wizardTemplate.cloneNode(true);

    template.querySelector('.setup-similar-label').textContent = wizard.name;
    template.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    template.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return template;
  };

  window.render = {
    wizards: function (data) {
      var similarList = document.querySelector('.setup-similar-list');
      similarList.innerHTML = '';
      var fragment = document.createDocumentFragment();
      for (var i = 0; i < COUNT_WIZARDS; i++) {
        var template = fillWizardTemplate(data[i]);
        fragment.appendChild(template);
      }
      similarList.appendChild(fragment);
    }
  };
})();
