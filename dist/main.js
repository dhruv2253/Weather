(()=>{"use strict";const t="d3f06a0f8adbf844ad69d2ba2196288c";async function e(e,n){try{const i=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=${t}&units=${n}`,{mode:"cors"});return await i.json()}catch(t){console.error}}const n=document.querySelector("input"),i=document.querySelector("button"),o=document.querySelector(".city-name"),a=document.querySelector(".temp"),c=document.querySelector(".feels"),r=document.querySelector(".description"),l=document.querySelector(".wind-speed"),s=document.querySelector(".message"),d=document.querySelector(".units"),m=document.querySelector(".humidity");let u=!0;async function p(t){d.textContent="Display C";try{const i=n.value;if(console.log(u),u){const n=await e(i,t);o.textContent=n.name,a.textContent="Temperature: "+Math.ceil(n.main.temp),c.textContent="Feels Like: "+Math.ceil(n.main.feels_like),r.textContent="Description: "+n.weather[0].description,l.textContent="Wind speed: "+Math.ceil(n.wind.speed)+" mph",m.textContent="Humidity: "+n.main.humidity+" %",s.textContent="",console.log(n)}else{const n=await e(i,t);o.textContent=n.name,a.textContent="Temperature: "+Math.ceil(n.main.temp),c.textContent="Feels Like: "+Math.ceil(n.main.feels_like),r.textContent="Description: "+n.weather[0].description,m.textContent="Humidity: "+n.main.humidity+" %",l.textContent="Wind speed: "+Math.ceil(n.wind.speed)+" kph",s.textContent="",console.log(n)}}catch(t){o.textContent="City Unavailable",s.textContent="Enter a valid city"}}d.textContent="Display C",d.addEventListener("click",(async function(){u?(p("metric"),u=!1,d.textContent="display F"):(p("imperial"),u=!0,d.textContent="display C")})),async function(){n.value="Atlanta";const t=await e("Atlanta","imperial");o.textContent=t.name,a.textContent="Temperature: "+Math.ceil(t.main.temp),c.textContent="Feels Like: "+Math.ceil(t.main.feels_like),r.textContent="Description: "+t.weather[0].description,m.textContent="Humidity: "+t.main.humidity+" %",l.textContent="Wind speed: "+Math.ceil(t.wind.speed)+" mph"}(),i.addEventListener("click",(()=>{u=!0,p("imperial")}))})();