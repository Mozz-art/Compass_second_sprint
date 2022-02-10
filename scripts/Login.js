import Timeout from "./Timeout.js"

export default function Login() {

  const inputUser = document.querySelector("#User")

  const inputSenha = document.querySelector("#Senha")

  const BtnContinuar = document.querySelector("#btnContinuar")

  const Erro = document.querySelector("#Erro")

  const Login = document.querySelector("#LOGIN")

  const home = document.querySelector("#HOME")

  BtnContinuar.addEventListener("click", () => {
      
    if (inputUser.value === "admin" && inputSenha.value === "admin") {
        Login.style.display = "none"
        home.style.display = "block"
        Timeout()
        document.title = "Compass-home"
        history.pushState(null, "Compass-home", "https://mozz-art.github.io/Compass_second_sprint/Home")

    } else {
        Erro.style.display="block"
        Login.style.display = "block"
        home.style.display = "none"
        inputUser.style.border = "1px solid #E9B425"
        inputSenha.style.border = "1px solid #E9B425"
    }
  })
}

