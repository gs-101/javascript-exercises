const roundtoFirstDecimal = function(number) {
  return Math.round(number * 10) / 10;
}

const convertToCelsius = function(fahrenheit) {
  let result = (fahrenheit - 32) * (5 / 9);

  // We've been asked to round it down.
  return roundtoFirstDecimal(result);
};

const convertToFahrenheit = function(celsius) {
  let result = (celsius * (9 / 5) + 32);

  // We've been asked to round it down.
  return roundtoFirstDecimal(result);  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
