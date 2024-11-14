let input = document.querySelector('.input');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let button = document.querySelector('.button');

button.addEventListener('click', async () => {
  try {
    let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&units=metric&appid=b6810aa34bf17f8f437b12819a4edadc&lang=en');

    if (!response.ok) {
      throw new Error("City not found");
    }

    let data = await response.json();
    let tempvalue = data['main']['temp'];
    let feelslikevalue = data['main']['feels_like'];
    let descvalue = data['weather'][0]['description'];
    let description = descvalue.toUpperCase();

    desc.innerHTML = description;
    temp.innerHTML = "The temperature in the city " + input.value + " is " + tempvalue.toFixed(0) + " °C, It feels like: " + feelslikevalue.toFixed(0) + ' °C';

  } catch (error) {
    alert("Wrong city name or there was an error! Please try again.");
  }
});

/* new version */
// let input = document.querySelector('.input');
// let temp = document.querySelector('.temp');
// let desc = document.querySelector('.desc');
// let button = document.querySelector('.button');

// button.addEventListener('click', async () => {
//   try {
//     console.log("Fetching location data...");

//     // First API call to get location data
//     let locationResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=aa9fc2e45112869421606ef1210e1537`);

//     if (!locationResponse.ok) {
//       throw new Error("City not found");
//     }

//     // Parse location response
//     let locationData = await locationResponse.json();
//     console.log("Location data:", locationData);

//     // Extract latitude and longitude
//     let lat = locationData.coord.lat;
//     let lon = locationData.coord.lon;

//     console.log(`Fetching weather data for coordinates: (${lat}, ${lon})`);

//     // Second API call to get weather data based on coordinates
//     let weatherResponse = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&appid=aa9fc2e45112869421606ef1210e1537`);

//     if (!weatherResponse.ok) {
//       throw new Error("Weather data not available");
//     }

//     // Parse weather response
//     let weatherData = await weatherResponse.json();
//     console.log("Weather data:", weatherData);

//     // Extract and format temperature and description
//     let tempvalue = weatherData.current.temp;
//     let feelslikevalue = weatherData.current.feels_like;
//     let descvalue = weatherData.current.weather[0].description;
//     let description = descvalue.toUpperCase();

//     // Update DOM with fetched weather data
//     desc.innerHTML = description;
//     temp.innerHTML = `The temperature in ${input.value} is ${tempvalue.toFixed(0)} °C, feels like ${feelslikevalue.toFixed(0)} °C`;

//   } catch (error) {
//     // Error handling and alert
//     console.error("Error occurred:", error);
//     alert("Wrong city name or there was an error! Please try again.");
//   }
// });


/* old version */
// let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&units=metric&appid=b6810aa34bf17f8f437b12819a4edadc&lang=en');

//     if (!response.ok) {
//       throw new Error("City not found");
//     }

//     let data = await response.json();
//     let tempvalue = data['main']['temp'];
//     let feelslikevalue = data['main']['feels_like'];
//     let descvalue = data['weather'][0]['description'];
//     let description = descvalue.toUpperCase();

//     desc.innerHTML = description;
//     temp.innerHTML = "The temperature in the city " + input.value + " is " + tempvalue.toFixed(0) + " °C, It feels like: " + feelslikevalue.toFixed(0) + ' °C';

//   } catch (error) {
//     alert("Wrong city name or there was an error! Please try again.");
//   }