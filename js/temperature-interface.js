var Temperature = require('./../js/temperature.js').temperatureModule;



$(document).ready(function() {
  var currentTemperatureObject = new Temperature();
  var temp;

  $("#temp-celsius").click(function() {
    temp = parseFloat($("#temp").text());
    $(".showTempConversion").text("The temperature in Celsius is " + currentTemperatureObject.convertCelsius(temp) + ".");
  });

  $("#temp-fahrenheit").click(function() {
    temp = $("#temp").text();
    $(".showTempConversion").text("The temperature in Fahrenheit is " + currentTemperatureObject.convertFahrenheit(temp) + ".");
  });
});
