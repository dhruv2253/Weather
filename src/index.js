import {getData} from "./getData";

const inputField = document.querySelector('input');
const searchButton = document.querySelector('button');
const cityName = document.querySelector('.city-name');
const temp = document.querySelector('.temp');
const feelsLike = document.querySelector('.feels');
const weatherDescription = document.querySelector('.description');
const windSpeed = document.querySelector('.wind-speed');
const errorMessage = document.querySelector('.message');
const unitsButton = document.querySelector('.units');
// TODO: add farenheit and celsius conversion. and add symbols to temperature. add pictures for different weathers
let farenheitUnit = true;
unitsButton.textContent = 'Display C';
async function loadDefault() {
    inputField.value = 'Atlanta';
    const defaultCityData = await getData('Atlanta', 'imperial')
        cityName.textContent = defaultCityData.name;
        temp.textContent = "Temperature: " + Math.ceil(defaultCityData.main.temp)
        feelsLike.textContent = "Feels Like: " + Math.ceil(defaultCityData.main.feels_like);
        weatherDescription.textContent = "Description: " + defaultCityData.weather[0].description;
        windSpeed.textContent = "Wind speed: " + Math.ceil(defaultCityData.wind.speed) + " mph";
    
}
unitsButton.addEventListener('click', switchUnit);

async function switchUnit() {
    if (farenheitUnit) {
        let unit = 'metric'
        displayInfo(unit);
        farenheitUnit = false;
        unitsButton.textContent = 'display F'
    }
    else {
        let unit = 'imperial';
        displayInfo(unit);
        farenheitUnit = true;
        unitsButton.textContent = 'display C'
    }
}

 async function displayInfo(unit) {
    
    unitsButton.textContent = 'Display C'
    try {
    const city = inputField.value;
    console.log(farenheitUnit);
    if (farenheitUnit){ 
       
        const fetchedData = await getData(city, unit)
        cityName.textContent = fetchedData.name;
        temp.textContent = "Temperature: " + Math.ceil(fetchedData.main.temp)
        feelsLike.textContent = "Feels Like: " + Math.ceil(fetchedData.main.feels_like);
        weatherDescription.textContent = "Description: " + fetchedData.weather[0].description;
        windSpeed.textContent = "Wind speed: " + Math.ceil(fetchedData.wind.speed) + " mph";
        errorMessage.textContent = '';
        console.log(fetchedData)
    } else {
        const fetchedData = await getData(city, unit);
        cityName.textContent = fetchedData.name;
        temp.textContent = "Temperature: " + Math.ceil(fetchedData.main.temp)
        feelsLike.textContent = "Feels Like: " + Math.ceil(fetchedData.main.feels_like);
        weatherDescription.textContent = "Description: " + fetchedData.weather[0].description;
        windSpeed.textContent = "Wind speed: " + Math.ceil(fetchedData.wind.speed) + " kph";
        errorMessage.textContent = '';
        console.log(fetchedData)
    }
    
    } catch(e) {
        cityName.textContent = 'City Unavailable';
        errorMessage.textContent = "Enter a valid city";
        
    }



    
 }

 async function switchDisplay() {
    
 }


loadDefault();
 searchButton.addEventListener('click', () =>{
    farenheitUnit = true;
    const unit = 'imperial';
    displayInfo(unit);
 });