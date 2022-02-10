export default function Timeout() {

    let timer = 601;
  
    const Login = document.querySelector("#LOGIN")
  
    const home = document.querySelector("#HOME")
  
    const btnLogout = document.querySelector("btnLogout")
  
    let timerInterval = setInterval(function() {
  
      if(!timer || home.style.display == "none") {
        Login.style.display = "block"
        home.style.display = "none"
        timer = 601;
        clearInterval(timerInterval)
  
      } else {
        timer--;
        document.querySelector("#timer").innerHTML = timer;
      }
    }, 1000);
  }