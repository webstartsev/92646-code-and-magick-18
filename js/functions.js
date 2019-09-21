var getMaxOfArray = function (numArray) {
  var max = 0;
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] > max) {
      max = numArray[i];
    }
  }
  return max;
};

var getRandomArbitrary = function (min, max) {
  return Math.random() * (max - min) + min;
};
