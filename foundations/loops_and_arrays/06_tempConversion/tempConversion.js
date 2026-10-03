const convertToCelsius = function (fahrenheit) {
  num = Math.round((fahrenheit - 32) * (5 / 9) * 10);
  return num / 10;
};

const convertToFahrenheit = function (celsius) {
  num = Math.round((celsius * (9 / 5) + 32) * 10);
  return num / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

console.log(convertToCelsius(72));
console.log(convertToFahrenheit(34));
