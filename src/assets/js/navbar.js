document.addEventListener('DOMContentLoaded', () => {
    navbar();
})


function navbar() {
    const burgerToggle = document.getElementById('burgerToggle');
    const navMenu = document.querySelector('.header__inner_menu');
    const closeBtn = document.getElementById('closeBtn');

    burgerToggle.addEventListener('click', (event) => {
        navMenu.classList.toggle('active');
        toggleOverlay(true);
        event.stopPropagation();
    });

    document.addEventListener('click', function (event) {
        if (!event.composedPath().includes(navMenu)) {
            navMenu.classList.remove('active');
            toggleOverlay(false);

        }
    });

    closeBtn.addEventListener('click', () => {
        navMenu.classList.remove('active');
        toggleOverlay(false);
    });
}

function toggleOverlay(condition) {
    const overlay = document.querySelector('.header__inner_overlay');
    if (condition === true) {
        overlay.style.display = 'block';
    } else if (condition === false) {
        overlay.style.display = 'none';
    }
}