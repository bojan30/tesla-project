const menu = document.querySelector('.menu');
const links = document.querySelector('ul');
let displayMenu = false;

function toggleMenu() {
    const lines = document.querySelectorAll('.line');
    if (!displayMenu) {
        links.classList.remove('hide');
        links.classList.add('show');
        lines.forEach(l => l.classList.add('transformMenu'));
        displayMenu = true;
    } else {
        links.classList.remove('show');
        links.classList.add('hide');
        lines.forEach(l => l.classList.remove('transformMenu'));
        displayMenu = false;
    }
}
menu.addEventListener('click', toggleMenu);

function mediaLinks() {
    if (window.innerWidth > 767) {
        links.classList.remove('hide');
        links.classList.add('flex');
    } else {
        links.classList.add('hide');
        links.classList.remove('flex');
    }
}
window.addEventListener('load', mediaLinks);
window.addEventListener('resize', mediaLinks);