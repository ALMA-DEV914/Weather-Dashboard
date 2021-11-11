var cityInputEl = document.querySelector("#cityname");
var cityFormEl = document.querySelector("#city-form");
var cityContainerEl = document.querySelector("#city-container");
var searchButtonEl = document.querySelector("#search");
var resultsContainerEl = document.querySelector("#results-container");
var searchCityEl = document.querySelector("#searchcity");
var forecastEl = document.querySelector("#showWeatherForecast");
var uvindexEl = document.querySelector("#uvindex");
var searchedCities = [];

// 2 functions
// one does the current day forecast
// the other does the five day forecast

var date = moment().format("MMMM Do YYYY - h:mm:ss a");
$("#date").text(date);

searchButtonEl.addEventListener("click", function (event) {
  event.preventDefault();

  var city = cityInputEl.value.trim();
  searchCityEl.textContent = "";
  forecastEl.textContent = "";

  saveCities();

  // call the current day forecast function
  currentForecast(city);
  // call the five day forecast function
  fiveForecast(city);
});

function currentForecast(city) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city + 
      "&icon&units=imperial&uvi?&APPID=9744d0c7ce6c0249a3e788815a2c2ef4"
  ).then(function (response) {
    response.json().then(function (data) {
      console.log(data);

      var date = moment().format("ddd, MMMM Do YYYY");
      var divEl = document.createElement("div");
      var cityNameEl = document.createElement("h2");
      var weatherIconEl = document.createElement("img");
      weatherIconEl.setAttribute("src", "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png");
      var desEl = document.createElement("p");
      var tempEl = document.createElement("p");
      var humidEl = document.createElement("p");
      var windEl = document.createElement("p");
      

      desEl.textContent = "Description: " + data.weather[0].description;
      windEl.textContent = "Wind: " + data.wind.speed;
      tempEl.textContent = "Temperature:" + " " + data.main.temp;
      humidEl.textContent = "Humidity:" + " " + data.main.humidity;
      cityNameEl.textContent = city + " " + "(" + date + ")" ;
      
      searchCityEl.appendChild(divEl);
      divEl.appendChild(cityNameEl);
      divEl.appendChild(weatherIconEl);
      divEl.appendChild(desEl);
      divEl.appendChild(tempEl);
      divEl.appendChild(windEl);
      divEl.appendChild(humidEl);
  
      var lat = data.coord.lat;
      var lon = data.coord.lon;
      var uviUrl = "https://api.openweathermap.org/data/2.5/onecall?&lat=" + lat +"&lon=" + lon + "&appid=9744d0c7ce6c0249a3e788815a2c2ef4";
                fetch(uviUrl).then(function(response){
                    response.json().then(function(data){
                         console.log(data);

                        uvindexEl.textContent = "UV-index: " + data.current.uvi;
                        if (data.current.uvi < 5){
                            uvindexEl.setAttribute("style", "background:green");
                        }
                        else if(data.current.uvi >= 5 && data.current.uvi < 10){
                            uvindexEl.setAttribute("style", "color: black");
                        }
                        else{
                            uvindexEl.setAttribute("style", "background:red");
                        }
                    });
                }); 
         });
  });
} 


function fiveForecast(city) {
  var key = "9744d0c7ce6c0249a3e788815a2c2ef4";
  var url =
    `https://api.openweathermap.org/data/2.5/forecast?q=` + city + `&date=dt_txt&count=5&units=imperial&uvi?&appid=9744d0c7ce6c0249a3e788815a2c2ef4`;

  $.ajax({
    url: url, //API Call
    dataType: "json",
    type: "GET",
    data: {
      q: city,
      appid: key,
      units: "metric",
      cnt: "5",
    },
    success: function (data) {
      console.log("Received data:", data); // For testing
      var weatherForecast = "";
      weatherForecast +=
        "<h2>" + "FORECAST FOR 5 DAYS" + " ( " + city + " )" + "</h2>"; // City (displays once)

      weatherForecast +=
        "<h4> " + moment().add(1, "days").format("ddd, MMM Do YY") + "</h4>";
      weatherForecast +=
        "<h4>" + moment().add(2, "days").format("ddd, MMM Do YY") + "</h4>";
      weatherForecast +=
        "<h4>" + moment().add(3, "days").format("ddd, MMM Do YY") + "</h4>";
      weatherForecast +=
        "<h4>" + moment().add(4, "days").format("ddd, MMM Do YY") + "</h4>";
      weatherForecast +=
        "<h4>" + moment().add(5, "days").format("ddd, MMM Do YY") + "</h4>";

      $.each(data.list, function (date, val) {
        weatherForecast += "<p>"; // Opening paragraph tag
        weatherForecast += "<b>Day " + date + "</b>:" + "</br>"; // Day
        weatherForecast +=
          "<img src='https://openweathermap.org/img/w/" +
          val.weather[0].icon +
          ".png'>" +
          "</br>"; // Icon
        weatherForecast +=
          "<span> | " + val.weather[0].description + "</span>" + "</br>"; // Description
        weatherForecast += " Temp: " + val.main.temp + "&degC" + "</br>"; // Temperature
        weatherForecast += "Humidity: " + val.main.humidity + "</br>"; // Humidity
        weatherForecast += "Wind: " + val.wind.speed;
        weatherForecast += "</p>"; // Closing paragraph tag
      });
      $("#showWeatherForecast").html(weatherForecast);
    },
  });
}

function saveCities() {
  var city = cityInputEl.value.trim();
  resultsContainerEl = searchedCities;
  if (searchedCities.indexOf(city) === -1) {
    searchedCities.push(city);
    localStorage.setItem("cities", JSON.stringify(searchedCities));
    console.log(searchedCities);
  }
  loadCities();
  return searchedCities.value;
}
function loadCities() {
  cityContainerEl.innerHTML = "";
  var loadCities = JSON.parse(localStorage.getItem("cities")) || [];
  for (let i = 0; i < loadCities.length; i++) {
    var cityname = loadCities[i];

    var searchedHistoryEl = document.createElement("button");
    searchedHistoryEl.setAttribute("value", loadCities[i]);

    searchedHistoryEl.textContent = cityname;
    searchedHistoryEl.className = "list-item";

    searchedHistoryEl.addEventListener("click", function (event) {
      event.preventDefault();
      searchCityEl.textContent = "";
      forecastEl.textContent = "";
      var city = this.textContent;

      // call the current forecast function
      currentForecast(city);
      //call the five day forecast function
      fiveForecast(city);
    });

    cityContainerEl.append(searchedHistoryEl);
  }
}

function showHistory() {
  var loadCities = JSON.parse(localStorage.getItem("cities")) || [];
  for (let i = 0; i < loadCities.length; i++) {
    loadCities.innerHTML = "a";
    loadCities.setAttribute("value", loadCities[i]);
    cityContainerEl.append(loadCities[i]);
  }
  cityContainerEl.textContent = loadCities;
}

loadCities();
