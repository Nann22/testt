let request = require("request");
let apiKey = "fd21261019885d483aa7a236b0b1f36e";

console.log(apiKey);
let city = "jakarta";
let url = "https://api.openweathermap.org/data/2.5/weather?q=" + [city] + "&units=imperial&appid=" + [apiKey];

console.log(url);
request(url, function (err, response, body) {

  if (err) {
    console.log("error:", error);
  } else {
    let weather = JSON.parse(body);
    let message = "day " + [weather.main.temp] + " C in " + [weather.name];

    console.log(message);

  }

});