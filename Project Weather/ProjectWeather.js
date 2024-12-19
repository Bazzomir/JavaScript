const selectors = ['input', 'temp', 'desc', 'button', 'aqi', 'sunrise', 'sunset', 'timezone', 'forecast-container'];
const [input, temp, desc, button, aqi, sunrise, sunset, timezone, forecastContainer] =
  selectors.map(cls => document.querySelector(`.${cls}`));

const weatherEmoji = [
  { ids: [200, 201, 202], emoji: '⛈️', description: 'Thunderstorm with rain' },
  { ids: [210, 212, 221], emoji: '🌩️', description: 'Thunderstorm' },
  { ids: [230, 231, 300, 301, 310, 321, 500, 520], emoji: '🌦️', description: 'Light rain or drizzle' },
  { ids: [232, 302, 311, 312, 313, 314, 501, 502, 503, 504, 521, 522, 531], emoji: '🌧️', description: 'Heavy rain' },
  { ids: [600, 615, 616, 620, 621], emoji: '🌨️', description: 'Light snow' },
  { ids: [601, 602, 622], emoji: '❄️', description: 'Heavy snow' },
  { ids: [701], emoji: '🌫️', description: 'Mist' },
  { ids: [711], emoji: '🔥', description: 'Smoke' },
  { ids: [721, 741], emoji: '🌁', description: 'Fog' },
  { ids: [800], emoji: '☀️', description: 'Clear sky' },
  { ids: [801], emoji: '🌤️', description: 'Few clouds' },
  { ids: [802], emoji: '⛅', description: 'Scattered clouds' },
  { ids: [803], emoji: '🌥️', description: 'Broken clouds' },
  { ids: [804], emoji: '☁️', description: 'Overcast clouds' }
];

const getEmojiByWeatherId = (weatherId) => 
  weatherEmoji.find(group => group.ids.includes(weatherId)) || { emoji: "❓", description: "Unknown weather" };

async function fetchWeatherData() {
  try {
    const city = input.value.trim();
    const apiKey = "aa9fc2e45112869421606ef1210e1537";
    const units = "metric";

    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    const data = await fetch(weatherURL).then(res => {
      if (!res.ok) throw new Error("City not found");
      return res.json();
    });

    const { temp: tempValue, feels_like: feelsLike } = data.main;
    const { description, id: weatherId } = data.weather[0];
    const { lat, lon } = data.coord;
    const { sunrise: sunriseTime, sunset: sunsetTime } = data.sys;
    let timezoneOffset = data.timezone;
    
    const aqiURL = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const aqiValue = await fetch(aqiURL)
      .then(res => res.json())
      .then(air => air.list[0].main.aqi);

    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`;
    const forecastData = await fetch(forecastURL).then(res => res.json());

    const { emoji, description: weatherDescription } = getEmojiByWeatherId(weatherId);

    temp.innerHTML = `The temperature in ${city} is ${Math.round(tempValue)} °C, feels like ${Math.round(feelsLike)} °C`;
    aqi.innerHTML = `Air Quality Index (AQI): ${aqiValue}`;
    sunrise.innerHTML = `Sunrise: ${new Date(sunriseTime * 1000).toLocaleTimeString()}`;
    sunset.innerHTML = `Sunset: ${new Date(sunsetTime * 1000).toLocaleTimeString()}`;
    timezone.innerHTML = `Timezone offset: ${(timezoneOffset / 3600).toFixed(1)} hours from UTC`;

    desc.innerHTML = `<span title="${weatherDescription}">${emoji}</span> ${description.toUpperCase()}`;

    forecastContainer.innerHTML = '';
    const forecastDays = {};

    forecastData.list.forEach(item => {
      const date = new Date(item.dt * 1000).toLocaleDateString();
      if (!forecastDays[date]) {
        const { emoji, description } = getEmojiByWeatherId(item.weather[0].id);
        forecastDays[date] = { temp: item.main.temp, emoji, description };
      }
    });

    Object.entries(forecastDays).forEach(([date, { temp, emoji, description }]) => {
      const dayDiv = document.createElement('div');
      dayDiv.classList.add('forecast-day');
      dayDiv.innerHTML = `
        <strong>${date}</strong><br>
        Temp: ${Math.round(temp)} °C<br>
        Weather: <span class="emoji" title="${description}">${emoji}</span>
      `;
      forecastContainer.appendChild(dayDiv);
    });

  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Wrong city name or there was an error! Please try again.");
  }
}

const toggleWeatherDisplay = () => document.querySelector('.weather-display')?.classList.toggle('visible');

button.addEventListener('click', fetchWeatherData);
input.addEventListener('keydown', e => e.key === 'Enter' && (fetchWeatherData(), toggleWeatherDisplay()));





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