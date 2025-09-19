const removeFromArray = function (arr, ...num) {
  return arr.filter((value) => !num.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
