document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const themeSwitch = document.querySelector('#theme-switch');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    themeSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });
});
