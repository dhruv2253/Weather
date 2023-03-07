const key = 'd3f06a0f8adbf844ad69d2ba2196288c';

async function getData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}&units=imperial`,{mode: 'cors'})
        console.log('hi');
        const data = await response.json();
        return data;
    } catch(e) {
        console.error;
    }
     
   
}

export {getData};