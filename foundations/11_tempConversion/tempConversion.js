const convertToCelsius = function(f) {
  let celcius = (f - 32) * 5/9;
  let hasil = Math.round(celcius * 10)/10;
  return hasil;
};

const convertToFahrenheit = function(c) {
  let fahrenheit = (c * 9/5) + 32;
  let hasil = Math.round(fahrenheit * 10)/10;
  return hasil;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
