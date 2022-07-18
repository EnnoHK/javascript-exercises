const ftoc = function (fahr) {
  fahr = (fahr - 32) * (5 / 9);
  return Math.round(fahr * 10) / 10;
};

const ctof = function (cel) {
  cel = cel * (9 / 5) + 32;
  return Math.round(cel * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

/*

( °C × 9/5) + 32
(°F - 32) * 5/9
Math.round(number * 10) / 10
*/