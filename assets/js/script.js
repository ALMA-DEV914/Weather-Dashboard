var cityInputEl = document.querySelector("#cityname");
var cityFormEl = document.querySelector("#city-form");
var cityContainerEl = document.querySelector("#city-container");
var inputButtonEl = document.querySelector("#input");
var resultsContainer = document.querySelector("#results-container");
searchCityEl = document.getElementById("searchcity");
var cityList = "cities";
//var city = cityInputEl.value.trim();
// Add timezone plugins to day.js
/*dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);*/
var date = moment().format('MMMM Do YYYY - h:mm:ss a');
$("#date").text(date);

 /*fetch("https://api.openweathermap.org/data/2.5/weather?q=Reno,us&APPID=9744d0c7ce6c0249a3e788815a2c2ef4")
 .then(function(response){
    response.json().then(function(data){
    console.log(data);
     var divEl = document.createElement("div");
     var cityNameEl = document.createElement('h2');
     var pEl = document.createElement('p');
     pEl.textContent = data.base;
     cityNameEl.textContent = data.name;
     document.getElementById('search-results').appendChild(divEl);
     divEl.appendChild(cityNameEl);
     divEl.appendChild(pEl);
     console.log(divEl);
    });
});
*/
/*var formSubmitHandler = function(event){
    event.preventDefault();
    //get value from input
    
    if(city){
        cityInputEl(city);
        //clear old value from input
        resultsContainer.value = city;
        cityContainerEl.textContent = cityname;
        cityInputEl.value = "";
    } else {
        alert("please enter a city");
    }
};

var getForecast = function(){
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + cityInputEl.value + "&units=imperial&uvi?&appid=9744d0c7ce6c0249a3e788815a2c2ef4")
    .then(function(response){
    response.json().then(function(forecast){
       console.log(forecast);
    });
});
};
*/
inputButtonEl.addEventListener("click", function(event){
      event.preventDefault();
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ cityInputEl.value + "&icon&units=imperial&uvi?&APPID=9744d0c7ce6c0249a3e788815a2c2ef4")
      .then(function(response){
     
    response.json().then(function(data){
   
     console.log(data);
     
      var date = moment().format("LLLL");
      //var day1 = moment().add(1, 'days').calendar();    
      //var city = cityInputEl.value.trim();
      var liEl = document.createElement("a")
      liEl.classList = 'list-item flex-row justify-space-between align-center ';
      liEl.textContent = city;
      cityContainerEl.appendChild(liEl);

      var divEl = document.createElement("div");
      var cityNameEl = document.createElement('h2');
      var desEl = document.createElement('p');
      var tempEl = document.createElement('p');
      var humidEl = document.createElement('p');
      var windEl = document.createElement('p');
      var uvIndexEl = document.createElement('p');
      uvIndexEl.textContent = document.createElement('p');
      desEl.textContent = "Description: " + data.weather[0].description;
      uvIndexEl.textContent = "Uv Index: " + "0";
      windEl.textContent = "Wind: " + data.wind.speed;
      tempEl.textContent = "Temperature:" + " " + data.main.temp; 
      humidEl.textContent = "Humidity:" + " "+ data.main.humidity; 
      cityNameEl.textContent = city + " " + '(' + date
      + ')';
      searchCityEl.appendChild(divEl);
      divEl.appendChild(cityNameEl);
      //document.getElementById('search-results').appendChild(divEl);
      divEl.appendChild(desEl);
      divEl.appendChild(tempEl);
      divEl.appendChild(windEl);
      divEl.appendChild(humidEl);
      divEl.appendChild(uvIndexEl);
      
    
     //cityContainerEl.textContent = cityList;
    });

/*fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + cityInputEl.value + "&count=5&units=imperial&uvi?&appid=9744d0c7ce6c0249a3e788815a2c2ef4")
        .then(function(response){
        response.json().then(function(forecast){
           console.log(forecast);
    
     //const strDate = d.toLocaleString();
     var timestamp = Date.now(), // returns milliseconds since epoch time
      normalisedTime = new Date(timestamp);
    
      var h2El = document.createElement('h2');
      var dEl = document.createElement('h3');
      var iconEl = document.createElement("p");
      var tEl = document.createElement('p');
      var hEl = document.createElement('p');
      var wEl = document.createElement('p')
      var d1El = document.createElement('h3');
      var icon1El = document.createElement("p");
      var t1El = document.createElement('p');
      var h1El = document.createElement('p');
      var w1El = document.createElement('p')
      var d2El = document.createElement('h3');
      var t2El = document.createElement('p');
      var hu2El = document.createElement('p');
      var w2El = document.createElement('p')
      var d3El = document.createElement('h3');
      var t3El = document.createElement('p');
      var h3El = document.createElement('p');
      var w3El = document.createElement('p')
      var d4El = document.createElement('h3');
      var t4El = document.createElement('p');
      var h4El = document.createElement('p');
      var w4El = document.createElement('p')
      dEl.textContent = forecast.dt=moment().add(1, 'days');
      iconEl.textContent = forecast.list[0].weather[0].description;
      tEl.textContent = "Temp: " + forecast.list[0].main.temp;
      hEl.textContent = "Humidity: " + forecast.list[0].main.humidity;
      wEl.textContent = "Wind: " + forecast.list[0].wind.speed;
      d1El.textContent =forecast.dt=moment().add(2, "days");
      icon1El.textContent = forecast.list[0].weather[0].description;
      t1El.textContent = "Temp: " + forecast.list[0].main.temp;
      h1El.textContent = "Humidity: " + forecast.list[0].main.humidity;
      w1El.textContent = "Wind: " + forecast.list[0].wind.speed;
      d2El.textContent = forecast.dt=moment().add(3,"days");
      t2El.textContent = "Temp: " + forecast.list[0].main.temp;
      hu2El.textContent = "Humidity: " + forecast.list[0].main.humidity;
      w2El.textContent = "Wind: " + forecast.list[0].wind.speed;
      d3El.textContent = moment().add(4, "days");
      t3El.textContent = "Temp: " + forecast.list[0].main.temp;
      h3El.textContent = "Humidity: " + forecast.list[0].main.humidity;
      w3El.textContent = "Wind: " + forecast.list[0].wind.speed;
      d4El.textContent = moment().add(5,"days");
      t4El.textContent = "Temp: " + forecast.list[0].main.temp;
      h4El.textContent = "Humidity: " + forecast.list[0].main.humidity;
      w4El.textContent = "Wind: " + forecast.list[0].wind.speed;
      h2El.textContent = "FORECAST FOR 5 DAYS";
      h2El.setAttribute("style", "padding:20px");
      
      document.getElementById('forecast').appendChild(h2El);
      document.getElementById('1day').appendChild(dEl);
      dEl.appendChild(iconEl);
      d1El.appendChild(icon1El);
      dEl.appendChild(tEl);
      dEl.appendChild(hEl);
      dEl.appendChild(wEl);
      d1El.appendChild(t1El);
      d1El.appendChild(h1El);
      d1El.appendChild(w1El);
      d2El.appendChild(t2El);
      d2El.appendChild(hu2El);
      d2El.appendChild(w2El);
      d3El.appendChild(t3El);
      d3El.appendChild(h3El);
      d3El.appendChild(w3El);
      d4El.appendChild(t4El);
      d4El.appendChild(h4El);
      d4El.appendChild(w4El);
      document.getElementById('2day').appendChild(d1El);
      document.getElementById('3day').appendChild(d2El);
      document.getElementById('4day').appendChild(d3El);
      document.getElementById('5day').appendChild(d4El);
*/
    var city = cityInputEl.value.trim();
    var key = '9744d0c7ce6c0249a3e788815a2c2ef4';
    var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInputEl.value + "&count=5&units=imperial&uvi?&appid=9744d0c7ce6c0249a3e788815a2c2ef4";
   

$.ajax({
  url: url, //API Call
  dataType: "json",
  type: "GET",
  data: {
    q: city,
    appid: key,
    units: "metric",
    cnt: "6"
  },
  success: function(data) {
    console.log('Received data:', data) // For testing
    var weatherForecast = "";
    weatherForecast += "<h2>" + 'FORECAST FOR 5 DAYS' + "( " + city +  " )" + "</h2>"; // City (displays once)
    $.each(data.list, function(date, val) {
    weatherForecast += "<p>" // Opening paragraph tag
    weatherForecast += "<b>Day " + date + "</b>:" + "</br>"// Day
    weatherForecast += "<img src='https://openweathermap.org/img/w/" + val.weather[0].icon + ".png'>" + "</br>"// Icon
    weatherForecast += "<span> | " + val.weather[0].description + "</span>" + "</br>"; // Description
    weatherForecast += " Temp: " + val.main.temp + "&degC" + "</br>" // Temperature
    weatherForecast += "Humidity: " + val.main.humidity + "</br>" // Humidity
    weatherForecast += "Wind: " + val.wind.speed;
    weatherForecast += "</p>" // Closing paragraph tag
    });
    $("#showWeatherForecast").html(weatherForecast);
  }
});
function saveCities(){
  var city = cityInputEl.value;
  if (searchedCities.indexOf(city)===-1){
  searchedCities.push(city);
  localStorage.setItem("cities", JSON.stringify(searchedCities));
  }
  loadCities();
  return searchedCities.value;
}

function loadCities(){
  searchCityEl.innerHTML = "";
  var loadCities =   JSON.parse(localStorage.getItem("cities")) || [];
  // if(loadCities.length !==0){
  for (let i = 0; i < loadCities.length; i++) {
      
      var city = loadCities[i];
      
  
  var searchedHistoryEl = document.createElement("button");
  // searchedHistoryEl.classList.add("col-12");
  // searchedHistoryEl.setAttribute("type", "text");
  // searchedHistoryEl.setAttribute("readonly", true);
  searchedHistoryEl.setAttribute("value", loadCities[i]);
  searchedHistoryEl.textContent = city;
  searchedHistoryEl.addEventListener("click", function(event){
      searchCityEl.innerHTML = "";
      weather(loadCities[i]);
      event.preventDefault();
      cityContainerEl.textContent = [];
      
      
  });
 cityContainerEl.append(searchedHistoryEl);
 liEl.append(searchedHistoryEl);

}

};

function showHistory(){
  var loadCities =   JSON.parse(localStorage.getItem("cities")) || [];
  for (let i = 0; i < loadCities.length; i++){
      loadCities.innerHTML= "li";
      loadCities.setAttribute("value", loadCities[i])
      cityContainerEl.append(loadcities[i]);
  }
  
  cityContainerEl.textContent = loadCities;
}
// showHistory();

loadCities();

inputButtonEl.addEventListener("click", function(){
  var city = cityInputEl.value;
  weather(city);
});
          });
        });
//cityFormEl.addEventListener("submit", formSubmitHandler);

