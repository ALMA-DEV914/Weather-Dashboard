var cityInputEl = document.querySelector("#cityname");
var cityFormEl = document.querySelector("#city-form");
var cityContainerEl = document.querySelector("#city-container");
var searchButtonEl = document.querySelector("#search");
var resultsContainerEl = document.querySelector("#results-container");
var searchCityEl = document.getElementById("searchcity");
var datesContainerEl = document.querySelector("#forecast");
var forecastEl = document.querySelector("#showWeatherForecast");
var searchedCities = [];
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
searchButtonEl.addEventListener("click", function(event){
      event.preventDefault();
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ cityInputEl.value + "&icon&units=imperial&uvi?&APPID=9744d0c7ce6c0249a3e788815a2c2ef4")

    .then(function(response){
    response.json().then(function(data){
    console.log(data);
     
      var date = moment().format("LLLL");
      //var day1 = moment().add(1, 'days').calendar();    
      var city = cityInputEl.value.trim();
      var liEl = document.createElement("li")
      liEl.classList = 'list-item flex-row justify-space-between align-center ';
      cityContainerEl.appendChild(liEl);
      liEl.textContent = city;
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
    
      var h3DivEl = document.createElement('div');
      var dEl = document.createElement('h2');
      var d1El = document.createElement('h2');
      var d2El = document.createElement('h2');
      var d3El = document.createElement('h2');
      var d4El = document.createElement('h2');
      var d5El = document.createElement('h2');
      dEl.textContent = moment().add(1, 'days');
      d1El.textContent = moment().add(2, "days");
      d2El.textContent = moment().add(3,"days");
      d3El.textContent = moment().add(4, "days");
      d4El.textContent = moment().add(5,"days");
      d5El.textContent = moment().add(6,"days");
      h3DivEl.classList = "flex-row justify-space-between";
      datesContainerEl.appendChild(h3DivEl);
      h3DivEl.appendChild(dEl);
      h3DivEl.appendChild(d1El);
      h3DivEl.appendChild(d2El);
      h3DivEl.appendChild(d3El);
      h3DivEl.appendChild(d4El);
      h3DivEl.appendChild(d5El);
    

    saveCities();
  });
  
    var city = cityInputEl.value.trim();
    var key = '9744d0c7ce6c0249a3e788815a2c2ef4';
    var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInputEl.value  + "&count=5&units=imperial&uvi?&appid=9744d0c7ce6c0249a3e788815a2c2ef4";
    var date = moment().format("llll");

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
  var city = cityInputEl.value.trim();
  if (searchedCities.indexOf(city)===-1){
  searchedCities.push(city);
  localStorage.setItem("cities", JSON.stringify(searchedCities));
  
  }
  loadCities();
  return searchedCities.value;
}


function loadCities(){
  cityContainerEl.innerHTML = "";
  var loadCities =   JSON.parse(localStorage.getItem("cities")) || [];
  // if(loadCities.length !==0){
  for (let i = 0; i < loadCities.length; i++) {
      
      var cityname = loadCities[i];
      
   // var searchCityEl = cityname[i];
   // var datesContainerEl = cityname[i];
  //var liEl = document.createElement("li")
  var searchedHistoryEl = document.createElement("button");
  // searchedHistoryEl.classList.add("col-12");
  // searchedHistoryEl.setAttribute("type", "text");
  // searchedHistoryEl.setAttribute("readonly", true);
  searchedHistoryEl.setAttribute("value", loadCities[i]
  );
  //liEl.textContent = loadCities[i];
  searchedHistoryEl.textContent = cityname;
  searchedHistoryEl.classList = "link";

  searchedHistoryEl.addEventListener("click", function(event){
    if(searchedHistoryEl){
    searchCityEl.innerHTML = searchCityEl.textContent;
    datesContainerEl.innerHTML = datesContainerEl.textContent;
    forecastEl.textContent = forecastEl.textContent;
   
    for (var i=0; i < searchedCities.length; i++){
      cityContainerEl.textContent = cityname;
    }
    }
    $(loadCities[i]);
      event.preventDefault();
      //cityContainerEl.textContent = loadCities[i];
      //liEl.textContent = searchedHistoryEl;
      
  });
 
  cityContainerEl.append(searchedHistoryEl);
 //liEl.append(searchedHistoryEl);
 //cityContainerEl.appendChild(liEl);

}

};

function showHistory(){
  var loadCities =   JSON.parse(localStorage.getItem("cities", city)) || [];
  for (let i = 0; i < loadCities.length; i++){
      loadCities.innerHTML= "a";
      loadCities.setAttribute("value", loadCities[i])
      cityContainerEl.append(loadCities[i]);
      //liEl.append(loadCities[i]);
  }
  cityContainerEl.textContent = loadCities[i];
  liEl.append(loadCities[i]);
}
// showHistory();

loadCities();

searchButtonEl.addEventListener("click", function(){
  var city = cityInputEl.value;
  searchCityEl.textContent = "";
  datesContainerEl.textContent = "";
  
   $(city);
          });
      });
    });
//cityFormEl.addEventListener("submit", formSubmitHandler);
