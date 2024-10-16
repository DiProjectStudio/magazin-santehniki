document.addEventListener('DOMContentLoaded', () => {
    navbar();
})

function navbar() {
    const burgerToggle = document.getElementById('burgerToggle');
    const navMenu = document.querySelector('.header__inner_menu');
    const closeBtn = document.getElementById('closeBtn');
    const categoriesElement = document.querySelector('.products__categories');

    burgerToggle.addEventListener('click', (event) => {
        navMenu.classList.toggle('active');
        toggleOverlay(true);
        disableScroll();
        event.stopPropagation();

        if (navMenu.classList.contains('active')) {
            document.addEventListener('click', function (event) {
                if (!event.composedPath().includes(navMenu) && !event.composedPath().includes(categoriesElement)) {
                    navMenu.classList.remove('active');
                    toggleOverlay(false);
                    enableScroll();
                }
            });
        }
    });

    closeBtn.addEventListener('click', () => {
        navMenu.classList.remove('active');
        toggleOverlay(false);
        enableScroll();
    });
}

function toggleOverlay(condition) {
    const overlay = document.querySelector('.custom_overlay');
    if (condition === true) {
        overlay.style.display = 'block';
        disableScroll();

    } else if (condition === false) {
        overlay.style.display = 'none';
        enableScroll();
    }
}

function disableScroll() {
    document.body.style.overflow = 'hidden';
}

function enableScroll() {
    document.body.style.overflow = '';
}