let menuBtn = document.querySelector('.menu-btn');
let burger = document.querySelector('.menu-btn__burger');
let nav = document.querySelector('.nav');
let menuNav = document.querySelector('.menu-nav');

menuBtn.addEventListener('click', () => {
    burger.classList.toggle('open');
    nav.classList.toggle('open');
    menuNav.classList.toggle('open');
})