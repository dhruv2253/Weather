import {getData} from "./getData";

const inputField = document.querySelector('input');
const searchButton = document.querySelector('button');
const cityName = document.querySelector('.city-name');
const temp = document.querySelector('.temp');
async function displayInfo() {
    const city = inputField.value;
    const fetchedData = await getData(city)
    cityName.textContent = fetchedData.name;
    temp.textContent = fetchedData.main.temp
    console.log(fetchedData)
    
 }

 searchButton.addEventListener('click', displayInfo)