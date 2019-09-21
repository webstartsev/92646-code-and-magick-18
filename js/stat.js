'use strict';

var BACKGROUND_WIDTH = 420;
var BACKGROUND_HEIGHT = 270;
var BACKGROUND_X = 110;
var BACKGROUND_Y = 10;
var BACKGROUND_GAP = 10;

var FONT_FAMILY = 'PT Mono';
var FONT_SIZE = '16px';
var FONT_GAP = 10;
var FONT_X = 140;
var FONT_Y = 40;
var LINE_HEIGHT = 20;

var HISTOGRAM_HEIGHT = 150;
var HISTOGRAM_X = 150;
var HISTOGRAM_GAP = 20;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_COLOR_ME = 'rgba(255, 0, 0, 1)';

var renderBackground = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, BACKGROUND_WIDTH, BACKGROUND_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {

  renderBackground(ctx, BACKGROUND_X + BACKGROUND_GAP, BACKGROUND_Y + BACKGROUND_GAP, 'rgba(0, 0, 0, 0.7)');
  renderBackground(ctx, BACKGROUND_X, BACKGROUND_Y, '#ffffff');

  // Текс
  ctx.fillStyle = '#000000';
  ctx.font = FONT_SIZE + FONT_FAMILY;
  ctx.fillText('Ура вы победили!', FONT_X, FONT_Y);
  ctx.fillText('Список результатов:', FONT_X, FONT_Y + LINE_HEIGHT);

  var maxTime = getMaxOfArray(times);

  // Гистограмма
  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = 'hsl(240, 100%, ' + getRandomArbitrary(10, 100) + '%)';
    if (names[i] === 'Вы') {
      ctx.fillStyle = BAR_COLOR_ME;
    }

    var barHeight = HISTOGRAM_HEIGHT * times[i] / maxTime;
    var barX = HISTOGRAM_X + ((BAR_WIDTH + BAR_GAP) * i);
    var barY = BACKGROUND_HEIGHT - barHeight - HISTOGRAM_GAP;

    ctx.fillRect(barX, barY, BAR_WIDTH, barHeight);

    ctx.fillStyle = '#000000';
    ctx.fillText(Math.floor(times[i]), barX, barY - FONT_GAP);
    ctx.fillText(names[i], barX, barY + barHeight + FONT_GAP * 2);
  }
};
