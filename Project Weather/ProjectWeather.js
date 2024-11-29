let input = document.querySelector('.input');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let button = document.querySelector('.button');
let aqi = document.querySelector('.aqi');
let sunrise = document.querySelector('.sunrise');
let sunset = document.querySelector('.sunset');
let timezone = document.querySelector('.timezone');
let forecastContainer = document.querySelector('.forecast-container');

async function fetchWeatherData() {
  try {
    console.log("Fetching weather data...");
    
    let locationResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=aa9fc2e45112869421606ef1210e1537&units=metric`);

    if (!locationResponse.ok) {
      throw new Error("City not found");
    }

    let data = await locationResponse.json();
    console.log("Weather data:", data);

    let tempvalue = data['main']['temp'];
    let feelsLikeValue = data['main']['feels_like'];
    let descvalue = data['weather'][0]['description'];
    let description = descvalue.toUpperCase();

    let lat = data.coord.lat;
    let lon = data.coord.lon;

    let airQualityResponse = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=aa9fc2e45112869421606ef1210e1537&units=metric`);
    let airQualityData = await airQualityResponse.json();
    let aqiValue = airQualityData.list[0].main.aqi;

    let sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    let sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString();
    let timezoneOffset = data.timezone;

    let forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&appid=aa9fc2e45112869421606ef1210e1537&units=metric`);
    if (!forecastResponse.ok) {
      throw new Error("Error fetching 5-day forecast");
    }

    let forecastData = await forecastResponse.json();
    console.log("5-day forecast data:", forecastData);
    desc.innerHTML = description;
    temp.innerHTML = `The temperature in ${input.value} is ${tempvalue.toFixed(0)} °C, feels like: ${feelsLikeValue.toFixed(0)} °C`;
    aqi.innerHTML = `Air Quality Index (AQI): ${aqiValue}`;
    sunrise.innerHTML = `Sunrise: ${sunriseTime}`;
    sunset.innerHTML = `Sunset: ${sunsetTime}`;
    timezone.innerHTML = `Timezone offset: ${timezoneOffset / 3600} hours from UTC`;
    forecastContainer.innerHTML = '';

    let forecastDays = {};

    forecastData.list.forEach(item => {
      let date = new Date(item.dt * 1000).toLocaleDateString();

      if (!forecastDays[date]) {
        forecastDays[date] = {
          temp: item.main.temp,
          description: item.weather[0].description,
        };
      }
    });

    for (let date in forecastDays) {
      let dayForecast = forecastDays[date];
      let dayDiv = document.createElement('div');
      dayDiv.classList.add('forecast-day');
      dayDiv.innerHTML = `
        <strong>${date}</strong><br>
        Temp: ${dayForecast.temp.toFixed(0)} °C<br>
        Weather: ${dayForecast.description.toUpperCase()}
      `;
      forecastContainer.appendChild(dayDiv);
    }

    

  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Wrong city name or there was an error! Please try again.");
  }
}

function toggleWeatherDisplay() {
    let weatherDisplay = document.querySelector('.weather-display');
    if (weatherDisplay.classList.contains('visible')) {
      weatherDisplay.classList.remove('visible');
    } else {
      weatherDisplay.classList.add('visible');
    }
  }

button.addEventListener('click', fetchWeatherData);
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    fetchWeatherData();
    toggleWeatherDisplay();
  }
});

// old version
// async function fetchWeatherData() {
//   try {
//     console.log("Fetching weather data...");
    
//     let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&units=metric&appid=aa9fc2e45112869421606ef1210e1537&lang=en');

//     if (!response.ok) {
//       throw new Error("City not found");
//     }

//     let data = await response.json();
//     console.log("Weather data:", data);

//     let tempvalue = data['main']['temp'];
//     let feelslikevalue = data['main']['feels_like'];
//     let descvalue = data['weather'][0]['description'];
//     let description = descvalue.toUpperCase();

//     desc.innerHTML = description;
//     temp.innerHTML = "The temperature in the city " + input.value + " is " + tempvalue.toFixed(0) + " °C, It feels like: " + feelslikevalue.toFixed(0) + ' °C';

//   } catch (error) {
//     console.error("Error fetching weather data:", error);
//     alert("Wrong city name or there was an error! Please try again.");
//   }
// }

// button.addEventListener('click', fetchWeatherData);
// input.addEventListener('keydown', (event) => {
//   if (event.key === 'Enter') {
//     fetchWeatherData();
//   }
// });