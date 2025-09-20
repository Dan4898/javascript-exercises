const convertToCelsius = function (F) {
  const C = (5 / 9) * (F - 32);
  const fixed = parseFloat(C.toFixed(1));
  if (C % 1 !== 0) {
    return fixed;
  } else {
    return C;
  }
};

const convertToFahrenheit = function (C) {
  const F = C * 1.8 + 32;
  const fixed = parseFloat(F.toFixed(1));
  if (F % 1 !== 0) {
    return fixed;
  } else {
    return F;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
