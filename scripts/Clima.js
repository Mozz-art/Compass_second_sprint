export default function Clima(){

    const CITY = document.querySelector("#city");
    const TEMPERATURE = document.querySelector("#temperature");
    const URL_MAIN = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = 'cadc82de74495c75da1dc074e04ca989';
    const UNITS = 'metric';
    
    navigator.geolocation.getCurrentPosition(loadUrl);
    
    function loadUrl(pos) {
      let lat = pos.coords.latitude;
      let long = pos.coords.longitude;
      console.log(lat)
      console.log(long)
      console.log(pos)
      let url = `${URL_MAIN}?lat=${lat}&lon=${long}&units=${UNITS}&APPID=${API_KEY}`;
      console.log(url)
      fetchApi(url);
      
    };
    
    async function fetchApi(url) {
      let response = await fetch(url);
      let { main, name } = await response.json();
      let temperature = (main.temp).toFixed(0);
      CITY.innerText = `${name}:`;
      console.log(name)
      TEMPERATURE.innerText = `${temperature} ºC`;
    }
    }
    