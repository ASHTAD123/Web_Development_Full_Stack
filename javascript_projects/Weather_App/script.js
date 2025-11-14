document.addEventListener('DOMContentLoaded', ()=> {

    let cityInput = document.getElementById("city-input");
    let getWeatherBtn = document.getElementById("get-weather-btn");
    let weatherInfo = document.getElementById("weather-info");
    let cityName = document.getElementById("city-name");
    let temperature = document.getElementById("temperature");
    let description = document.getElementById("description");
    let errorMsg = document.getElementById("error-message");

    let API_KEY = "2eea0d51255cdfef4a33909e39811abc";
    
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


    async function fetchWeatherData(cityName){

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

        const response = await fetch(url);
        
        console.log("RESPONSE : " ,response);

        if(!response.ok) {
            throw new Error("City Not Found");
        }
            

        const data = await response.json()
        
        return data;
    }

    function displayWeatherData(weatherData){
        
        console.log(weatherData);

        const { name, main, weather } = weatherData;

        cityName.textContent = name;

        weatherInfo.classList.remove('hidden')

        errorMsg.classList.add('hidden')
    }

    function displayError(){
        weatherInfo.classList.remove('hidden');
        errorMsg.classList.remove('hidden');
    }

});