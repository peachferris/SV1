const burger = document.querySelector(".header-mobile");
const menu = document.querySelector(".header-wrapper-list");

const getMenu = () => {
    burger.addEventListener("click", () => {
        menu.classList.toggle("wrap-block")
        burger.classList.toggle("close-icon")
    })
}

getMenu();