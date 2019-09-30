'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var dialogHandler = document.querySelector('.upload');

  dialogHandler.addEventListener('mousedown', function (downEvt) {
    downEvt.preventDefault();

    var startCoords = {
      x: downEvt.clientX,
      y: downEvt.clientY,
    };

    var drag = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      drag = true;

      var diff = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY,
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY,
      };

      setup.style.left = (setup.offsetLeft - diff.x) + 'px';
      setup.style.top = (setup.offsetTop - diff.y) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (drag) {
        var onClickPreventDeafult = function (evt) {
          evt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDeafult);
        };
        dialogHandler.addEventListener('click', onClickPreventDeafult);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();
