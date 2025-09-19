const sumAll = function (a, b) {
  if (a < 0 || b < 0) {
    return "ERROR";
  } else if (typeof a !== "number" || typeof b !== "number") {
    return "ERROR";
  } else if (a % 1 !== 0 || b % 1 !== 0) {
    return "ERROR";
  } else {
  }

  let sumNumbers = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sumNumbers += i;
  }

  return sumNumbers;
};

// Do not edit below this line
module.exports = sumAll;
