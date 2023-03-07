import {getData} from "./getData";

const inputField = document.querySelector('input');
const searchButton = document.querySelector('button');
function displayInfo() {
    let input = inputField.value;
    console.log(getData(input))
    
 }

 searchButton.addEventListener('click', displayInfo)