"use strict"
const siteBody = document.querySelector('body');
const menu = document.querySelector('.menu');
const iconMenu = document.querySelector('.icon-menu');

document.addEventListener("click", menuActive);

function menuActive(event) {

    if (event.target.closest('.menu')) {
        iconMenu.classList.toggle('_active');
        menu.classList.toggle('_active');
        siteBody.classList.toggle('_lock');
    }

}