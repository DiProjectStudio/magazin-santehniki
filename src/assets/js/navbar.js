document.addEventListener('DOMContentLoaded', () => {
    navbar();
})


function navbar() {
    const burgerToggle = document.getElementById('burgerToggle');
    const navMenu = document.querySelector('.header__inner_menu');
    const closeBtn = document.getElementById('closeBtn');

    burgerToggle.addEventListener('click', (event) => {
        navMenu.classList.toggle('active');
        event.stopPropagation();
    });

    document.addEventListener('click', function (event) {
        if (!event.composedPath().includes(navMenu)) {
            navMenu.classList.remove('active');

        }
    });

    closeBtn.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
}