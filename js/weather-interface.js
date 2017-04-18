var Weather = require('./../js/weather.js').weatherModule;

var displayWeather = function(city, humidityData, temperatureData) {
  $(".showWeather").text("The humidity in " + city + " is " + humidityData +
    "%. The temperature in " + city + " is " + temperatureData + ".");
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city, displayWeather);
  });
});
