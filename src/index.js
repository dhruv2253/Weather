import {getData} from "./getData";

// query selections
const inputField = document.querySelector('input');
const searchButton = document.querySelector('button');
const cityName = document.querySelector('.city-name');
const temp = document.querySelector('.temp');
const feelsLike = document.querySelector('.feels');
const weatherDescription = document.querySelector('.description');
const windSpeed = document.querySelector('.wind-speed');
const errorMessage = document.querySelector('.message');
const unitsButton = document.querySelector('.units');
const humidity = document.querySelector('.humidity');
const weatherImage = document.querySelector('.weather-image');


// set unit button and default unit
let farenheitUnit = true;
unitsButton.textContent = 'Display C';

// load the default city
async function loadDefault() {
    inputField.value = 'Atlanta';
    const defaultCityData = await getData('Atlanta', 'imperial')
        cityName.textContent = defaultCityData.name;
        temp.textContent = Math.ceil(defaultCityData.main.temp) + '°F';
        feelsLike.textContent = "Feels Like: " + Math.ceil(defaultCityData.main.feels_like);
        weatherDescription.textContent = defaultCityData.weather[0].description;
        humidity.textContent = "Humidity: " + defaultCityData.main.humidity + " %";
        windSpeed.textContent = "Wind speed: " + Math.ceil(defaultCityData.wind.speed) + " mph";
    chooseIcon();
}



// refresh the page and use a different unit
async function switchUnit() {
    // if button is on farenheit, switch to celsius
    if (farenheitUnit) {
        let unit = 'metric'
        displayInfo(unit);
        farenheitUnit = false;
        unitsButton.textContent = 'display F'
    }
    // vice versa
    else {
        let unit = 'imperial';
        displayInfo(unit);
        farenheitUnit = true;
        unitsButton.textContent = 'display C'
    }
}

// Display info of given city
 async function displayInfo(unit) {
    
    unitsButton.textContent = 'Display C'
    try {
    const city = inputField.value;
    console.log(farenheitUnit);
    // If button is on farenheiht, load in fareheit 
    if (farenheitUnit){ 
       // display info
        const fetchedData = await getData(city, unit)
        cityName.textContent = fetchedData.name;
        
        temp.textContent = Math.ceil(fetchedData.main.temp) + '°F';
        feelsLike.textContent = "Feels Like: " + Math.ceil(fetchedData.main.feels_like) + '°F';

        weatherDescription.textContent = fetchedData.weather[0].description;
        windSpeed.textContent = "Wind speed: " + Math.ceil(fetchedData.wind.speed) + " mph";

        humidity.textContent = "Humidity: " + fetchedData.main.humidity + " %";
        errorMessage.textContent = '';
        console.log(fetchedData)
    } 
    // vice versa
    else {
        // display info
        const fetchedData = await getData(city, unit);
        cityName.textContent = fetchedData.name;

    
        temp.textContent = Math.ceil(fetchedData.main.temp) + '°C';
        feelsLike.textContent = "Feels Like: " + Math.ceil(fetchedData.main.feels_like) + '°C';
        weatherDescription.textContent = fetchedData.weather[0].description;

        humidity.textContent = "Humidity: " + fetchedData.main.humidity + " %";
        windSpeed.textContent = "Wind speed: " + Math.ceil(fetchedData.wind.speed) + " kph";

        errorMessage.textContent = '';
        console.log(fetchedData)
    }
    chooseIcon();
    
    
    } catch(e) {
        cityName.textContent = 'City Unavailable';
        
    }
 
 }


loadDefault();


// function that displays an icon based on weather description
 function chooseIcon() {
    if(weatherDescription.textContent.includes('cloud')) {
        weatherImage.src = 'icons/few-clouds.png';

    } else if(weatherDescription.textContent.includes('clear'))  {
        weatherImage.src = 'icons/clearsky.png';

    } else if(weatherDescription.textContent.includes('rain')) {
        weatherImage.src = 'icons/raining.png';

    } else if (weatherDescription.textContent.includes('mist') || weatherDescription.textContent.includes('fog')) {
        weatherImage.src = 'icons/mist.png';

    } else if (weatherDescription.textContent.includes('snow')) {
        weatherImage.src = 'icons/snow.png'
    }

 }


 // event listeners

 // search button listener
 searchButton.addEventListener('click', () =>{
    farenheitUnit = true;
    const unit = 'imperial';
    displayInfo(unit);
 });

 // switch unit when button is clicked
unitsButton.addEventListener('click', switchUnit);