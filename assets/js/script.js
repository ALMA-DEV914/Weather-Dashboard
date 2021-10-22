var cityInputEl = document.querySelector("#cityname");
var cityFormEl = document.querySelector("#city-form");
var cityContainerEl = document.querySelector("#city-container");
var inputEl = document.querySelector("#input");
var resultsContainer = document.querySelector("#results-container");
cityContainerEl.textContent = [];
//var searchCityList = cityListSearch;
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
var formSubmitHandler = function(event){
    event.preventDefault();
    //get value from input
    var cityname = cityInputEl.value.trim();

    if(cityname){
        getUserInput(cityname);

        //clear old value from input
        resultsContainer.textContent = "";
        cityContainerEl.textContent = cityname;
        cityInputEl.value = "";
    } else {
        alert("please enter a city");
    }
};

var getForecast = function(){
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=Reno&appid=9744d0c7ce6c0249a3e788815a2c2ef4")
    .then(function(response){
    response.json().then(function(forecast){
       console.log(forecast);
    });
});
};

inputEl.addEventListener("click", function(event){
      event.preventDefault();
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Reno,us&APPID=9744d0c7ce6c0249a3e788815a2c2ef4")
      .then(function(response){
     
    response.json().then(function(data){
   
     console.log(data);
        
       var date = moment().format("L");
      //var day1 = moment().add(1, 'days').calendar();    
      var city = cityInputEl.value.trim();
      var liEl = document.createElement("a")
      liEl.classList = 'list-item flex-row justify-space-between align-center ';
      liEl.textContent = city;
      cityContainerEl.appendChild(liEl);
      var divEl = document.createElement("div");
      var cityNameEl = document.createElement('h2');
      var tempEl = document.createElement('p');
      var humidEl = document.createElement('p');
      var windEl = document.createElement('p');
      var uvIndexEl = document.createElement('p');
      var h2El = document.createElement('h2');
      var dEl = document.createElement('h3');
      var d1El = document.createElement('h3');
      var d2El = document.createElement('h3');
      var d3El = document.createElement('h3');
      var d4El = document.createElement('h3');
      
      dEl.textContent = moment().add(1,"days");
      d1El.textContent = moment().add(2, "days");
      d2El.textContent = moment().add(3,"days");
      d3El.textContent = moment().add(4, "days");
      d4El.textContent = moment().add(5,"days");
      
      h2El.textContent = "FORECAST FOR 5 DAYS";
      uvIndexEl.textContent = document.createElement('p');
      uvIndexEl.textContent = "Uv Index:"
      windEl.textContent = "Wind:" + data.wind.speed;
      tempEl.textContent = "Temperature:" + " " + data.main.temp; 
      humidEl.textContent = "Humidity:" + " "+ data.main.humidity; 
      cityNameEl.textContent = city + " " + '(' + date
      + ')';
      h2El.setAttribute("style", "padding:20px");
      document.getElementById('search-results').appendChild(divEl);
      divEl.appendChild(cityNameEl);
      divEl.appendChild(tempEl);
      divEl.appendChild(windEl);
      divEl.appendChild(humidEl);
      divEl.appendChild(uvIndexEl);
      document.getElementById('forecast').appendChild(h2El);
      document.getElementById('1day').appendChild(dEl);
      document.getElementById('2day').appendChild(d1El);
      document.getElementById('3day').appendChild(d2El);
      document.getElementById('4day').appendChild(d3El);
      document.getElementById('5day').appendChild(d4El);
      

      console.log(city);
      
    localStorage.setItem("searchCityList", city);
    localStorage.getItem("searchCityList");
      
});
});
});


cityFormEl.addEventListener("submit", formSubmitHandler);