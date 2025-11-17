document.addEventListener('DOMContentLoaded', ()=> {

    let cityInput     = document.getElementById("city-input");
    let getWeatherBtn = document.getElementById("get-weather-btn");
    let weatherInfo   = document.getElementById("weather-info");
    let cityName      = document.getElementById("city-name");
    let temperature   = document.getElementById("temperature");
    let description   = document.getElementById("description");
    let errorMsg      = document.getElementById("error-message");
    let API_KEY       = "2eea0d51255cdfef4a33909e39811abc";

    //Get Weather onClick button
    getWeatherBtn.addEventListener('click',async()=>{

        const city= cityInput.value.trim();
        if(!city) return;

        try {
          const response = await fetchWeatherData(city);
          displayWeatherData(response);
        } catch (error) {
            displayError(error)
        }
    })

    //Fetch Weather from Server
    async function fetchWeatherData(cityName){
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

      const response = await fetch(url);
      console.log("RESPONSE : ", response);

      if (!response.ok) throw new Error("City Not Found");

      //Converting to JSON Format
      const data = await response.json();
      return data;
    }

    //Display Weather Data
    function displayWeatherData(weatherData){
        
        console.log(weatherData);
        
        weatherInfo.classList.remove("hidden");
        errorMsg.classList.add("hidden");

        const { name, main, weather } = weatherData;
        cityName.textContent = name;
        temperature.textContent = `Temperature :${main.temp}°C`;
        description.textContent = `Weather : ${weather[0].description}`
    }

    function displayError(){
        weatherInfo.classList.remove('hidden');
        errorMsg.classList.remove('hidden');
    }

});