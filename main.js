let menuItems = document.querySelector('.navbar');
let menuButton = document.querySelector('#menuIcon');

menuButton.addEventListener('click', () => {
    menuItems.classList.toggle('show');
});