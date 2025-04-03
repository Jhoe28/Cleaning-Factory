let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let section = document.querySelector('section')
menu.onclick = function() {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    section.classList.toggle('active')
}