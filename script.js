document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
});