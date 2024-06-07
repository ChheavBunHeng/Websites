const BTN = document.querySelector('.BTN');
const Weather_Info = document.getElementById('Weather_Info');
const SearchCity = document.querySelector('.SearchCity');
const Temp = document.querySelector('.Temperature');
const Country = document.querySelector('.Country');
const City = document.querySelector('.City');
const Weather_Status = document.querySelector('.Weather_Status');
const ChanceOFRain = document.querySelector('.ChanceofRain')


BTN.addEventListener('click', function () {
    if (SearchCity.value !== '') {
        Weather_Info.classList.remove('hidden');
        Weather_Info.classList.add('show');
    }
    else
    {
        Weather_Info.classList.remove('show');
        Weather_Info.classList.add('hidden');
    }
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
                    ChanceOFRain.innerHTML = data.current.precip;
                // 
            })
            .catch(function (error) {
                console.error('Error fetching weather data:', error);
            });
});

BTN.addEventListener('click', function () {


});










