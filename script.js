// onscroll fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;


    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');

    } else {
        header.classList.remove('navbar-fixed');

    }
};

// Hamburger Menu
const hamburgerBar = document.querySelector('#hamburger');
const navMobile = document.querySelector('#nav_mobile');

hamburgerBar.addEventListener('click', function() {
    hamburgerBar.classList.toggle('hamburger-active');
    navMobile.classList.toggle('hidden');

})