const divisibleByFour = function(number) {
  return number % 4 == 0;
}

const divisibleByOneHundred = function(number) {
  return number % 100 == 0;
}

const divisibleByFourHundred = function(number) {
  return number % 400 == 0;
}

const leapYears = function(year) {
  return divisibleByFour(year) && !divisibleByOneHundred(year) || divisibleByFourHundred(year);
};

// Do not edit below this line
module.exports = leapYears;
