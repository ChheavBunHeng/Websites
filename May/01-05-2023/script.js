const BTN = document.querySelector('.BTN');
const SearchCity = document.querySelector('.SearchCity');
const Temp = document.querySelector('.Temperature');
const Country = document.querySelector('.Country');
const City = document.querySelector('.City');
const Weather_Status = document.querySelector('.Weather_Status');
const Weather_Icon = document.querySelector('.WeatherIcon');
BTN.addEventListener('click', function () {


    const APIKEY = "6727a872d9942c45b4401fb6bcb12616";
    const URL = `http://api.weatherstack.com/current?access_key=${APIKEY}&query=${SearchCity.value}`;

    fetch(URL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const Temperature = data.current.temperature;
            console.log(Temperature);
            // alert(Temperature)
            Temp.innerHTML = Temperature;
            Country.innerHTML = data.location.country;
            City.innerHTML = data.location.name;
            Weather_Status.innerHTML = data.current.weather_descriptions;
            Weather_Icon.innerHTML = `<img src="${data.current.weather_icons[0]}" alt="${data.current.weather_descriptions[0]}">`;
            
        })
        .catch(function (error) {
            console.error('Error fetching weather data:', error);
        });
});
