let input = document.querySelector('.input');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let button = document.querySelector('.button');

input.style.width = '500px';
input.style.height = '30px';
button.style.height = '35px';
button.style.width = '100px';

button.addEventListener('click', weatherfunc = () => {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&units=metric&appid=b6810aa34bf17f8f437b12819a4edadc&lang=mk')
    .then(response => response.json())
    .then(data => {
      let tempvalue = data['main']['temp'];
      let feelslikevalue = data['main']['feels_like'];
      let descvalue = data['weather'][0]['description'];
      let description = descvalue.toUpperCase();
      desc.style.color = 'white';
      desc.style.padding = '50px';
      desc.innerHTML = description;
      temp.style.color = 'white';
      temp.innerHTML = "Температура: " + tempvalue.toFixed(0) + " C, Се чувствува како: " + feelslikevalue.toFixed(0) + ' C';
    })
    .catch(error => alert("Wrong city name !"));
});

document.body.style.backgroundColor = "black";
document.body.style.textAlign = "center";
document.body.style.fontSize = "30px";
document.body.style.marginTop = "20px";
