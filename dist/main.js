(()=>{"use strict";const t="d3f06a0f8adbf844ad69d2ba2196288c";async function e(e,n){try{const i=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=${t}&units=${n}`,{mode:"cors"});return await i.json()}catch(t){console.error}}const n=document.querySelector("input"),i=document.querySelector("button"),o=document.querySelector(".city-name"),c=document.querySelector(".temp"),a=document.querySelector(".feels"),s=document.querySelector(".description"),l=document.querySelector(".wind-speed"),r=document.querySelector(".message"),d=document.querySelector(".units"),u=document.querySelector(".humidity"),m=document.querySelector(".weather-image");let C=!0;async function p(t){d.textContent="Display C";try{const i=n.value;if(console.log(C),C){const n=await e(i,t);o.textContent=n.name,c.textContent=Math.ceil(n.main.temp)+"°F",a.textContent="Feels Like: "+Math.ceil(n.main.feels_like)+"°F",s.textContent=n.weather[0].description,l.textContent="Wind speed: "+Math.ceil(n.wind.speed)+" mph",u.textContent="Humidity: "+n.main.humidity+" %",r.textContent="",console.log(n)}else{const n=await e(i,t);o.textContent=n.name,c.textContent=Math.ceil(n.main.temp)+"°C",a.textContent="Feels Like: "+Math.ceil(n.main.feels_like)+"°C",s.textContent=n.weather[0].description,u.textContent="Humidity: "+n.main.humidity+" %",l.textContent="Wind speed: "+Math.ceil(n.wind.speed)+" kph",r.textContent="",console.log(n)}x()}catch(t){o.textContent="City Unavailable"}}function x(){s.textContent.includes("cloud")?m.src="icons/few-clouds.png":s.textContent.includes("clear")?m.src="icons/clearsky.png":s.textContent.includes("rain")?m.src="icons/raining.png":s.textContent.includes("mist")||s.textContent.includes("fog")?m.src="icons/mist.png":s.textContent.includes("snow")&&(m.src="icons/snow.png")}d.textContent="Display C",d.addEventListener("click",(async function(){C?(p("metric"),C=!1,d.textContent="display F"):(p("imperial"),C=!0,d.textContent="display C")})),async function(){n.value="Atlanta";const t=await e("Atlanta","imperial");o.textContent=t.name,c.textContent=Math.ceil(t.main.temp)+"°F",a.textContent="Feels Like: "+Math.ceil(t.main.feels_like),s.textContent=t.weather[0].description,u.textContent="Humidity: "+t.main.humidity+" %",l.textContent="Wind speed: "+Math.ceil(t.wind.speed)+" mph",x()}(),i.addEventListener("click",(()=>{C=!0,p("imperial")}))})();