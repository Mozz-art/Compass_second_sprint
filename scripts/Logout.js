export default function Logout(){

    const btnLogout = document.querySelector("#btnLogout")
    const Login = document.querySelector("#LOGIN")
    const home = document.querySelector("#HOME")

    btnLogout.addEventListener("click", () => {
        Login.style.display = "block"
        home.style.display = "none"
        document.title = "Compass-login"
        history.pushState(null, "Compass-login", "https://mozz-art.github.io/Compass_second_sprint/Login")       
    })
}
