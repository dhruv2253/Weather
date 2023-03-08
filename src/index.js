import {getData} from "./getData";

const inputField = document.querySelector('input');
const searchButton = document.querySelector('button');
const cityName = document.querySelector('.city-name');
const temp = document.querySelector('.temp');
const feelsLike = document.querySelector('.feels');
const weatherDescription = document.querySelector('.description');
const windSpeed = document.querySelector('.wind-speed');
const time = document.querySelector('.time');

async function displayInfo() {
    const city = inputField.value;
    const fetchedData = await getData(city)
    cityName.textContent = fetchedData.name;
    temp.textContent = "Temperature: " + fetchedData.main.temp
    feelsLike.textContent = "Feels Like: " + fetchedData.main.feels_like;
    weatherDescription.textContent = "Description: " + fetchedData.weather[0].description;
    windSpeed.textContent = "Wind speed: " + fetchedData.wind.speed + "mph";
   
    console.log(fetchedData)
    
 }

 searchButton.addEventListener('click', displayInfo)