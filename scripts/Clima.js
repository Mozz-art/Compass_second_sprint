export default function Clima(){

  fetch("https://api.weatherapi.com/v1/current.json?key=3a8e38945c8048d4a22134953221002&q=Rio_de_Janeiro&aqi=no")
  .then((respondes)=> respondes.json()).then(resultado =>{
    const city = resultado.location.name
    const temp = resultado.current.temp_c
    let icons = resultado.current.condition.icon
    document.querySelector("#city").innerHTML = city + "- RJ";
    document.querySelector("#temperature").innerHTML = temp + "°";
    let icones =  document.querySelector("#icon")
      icones.src = icons
  })
}