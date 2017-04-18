function Temperature() {
}

Temperature.prototype.convertCelsius = function (temperature) {
  return temperature - 273.15;
}

Temperature.prototype.convertFahrenheit = function(temperature) {
  return (temperature * (9/5)) - 459.67;
}

exports.temperatureModule = Temperature;
