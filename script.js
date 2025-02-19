document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.getElementById("burger-menu");
    const menu = document.querySelector(".header__menu");

    burgerMenu.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});
