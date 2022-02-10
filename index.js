import Clima from "./scripts/Clima.js"
import Login from "./scripts/Login.js"
import Relogio from "./scripts/Relogio.js"
import Logout from "./scripts/Logout.js"
history.pushState(null, "Login", "https://mozz-art.github.io/Compass_second_sprint/Login")
Clima()
Login()
Logout()

setInterval(()=>{

  Relogio()
  
}, 1000);