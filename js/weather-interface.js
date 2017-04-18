var Weather = require('./../js/weather.js').weatherModule;

var displayWeather = function(city, humidityData, temperatureData) {
  $(".showWeather").html("The humidity in " + city + " is " + humidityData +
    "%. The temperature in " + city + " is <span id='temp'>" + temperatureData + "</span> (Kelvin).");
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weather-location').click(function() {
    $(".showTempConversion").empty();
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city, displayWeather);
    $(".tempConversion").show();
  });
});
