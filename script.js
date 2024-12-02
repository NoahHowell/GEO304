const menuIcon = document.querySelector('.hamburger');
const navBar = document.querySelector('.nav-bar');

menuIcon.onclick = () => {
    navBar.classList.toggle('active');
};