
const menuToggle = document.querySelector(".hamburger")
const menu = document.querySelector(".nav__list")

menuToggle.addEventListener("click", toggleMenu)

function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active")
    } else {
        menu.classList.add("active")
    }
}