var apiKey = require('./../.env').apiKey;

function Weather() {
}

Weather.prototype.getWeather = function(city, displayWeather) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey).then(function(response) {
    displayWeather(city, response.main.humidity, response.main.temp);
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
}

exports.weatherModule = Weather;
