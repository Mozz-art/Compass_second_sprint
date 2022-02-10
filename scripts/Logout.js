export default function Logout(){

    const btnLogout = document.querySelector("#btnLogout")
    const Login = document.querySelector("#LOGIN")
    const home = document.querySelector("#HOME")

    btnLogout.addEventListener("click", () => {
        Login.style.display = "block"
        home.style.display = "none"       
    })
}
