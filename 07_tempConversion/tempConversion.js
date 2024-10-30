const convertToCelsius = function(fTemp) {

  return ((((fTemp-32) * (5/9)) * 10) / 10).toFixed(1) * 1
};

const convertToFahrenheit = function(cTemp) {

  return (((1.8*cTemp+32) * 10) / 10).toFixed(1) * 1
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
