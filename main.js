import "@styles/main.scss";
//import "@styles/main.less";

import App from "@main/app";
window.App = new App();


//Переход по кнопке на страницу

const btn = document.getElementById("login-btn");
const inp = document.querySelector(".input-login");

const getPage = () => {
    btn.addEventListener("click", () => {
        if(inp.value != "") {
            window.open("brands.njk");
        } else {
             alert("Введите данные!");
        }
    })
}

getPage();
