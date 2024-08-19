document.addEventListener('DOMContentLoaded', () => {
    categoriesMenuAction();
    subcategoriesAction();
})

function categoriesMenuAction() {
    const categoriesActionButton = document.querySelector('.products__top');
    const categoriesElement = document.querySelector('.products__categories');
    const productsInnerElement = document.querySelector('.products__inner');
    categoriesActionButton.addEventListener('click', (e) => {
        e.stopPropagation();
        productsInnerElement.classList.toggle('active');
        if (productsInnerElement.classList.contains('active')) {
            toggleOverlay(true);
            disableScroll();
        } else {
            toggleOverlay(false);
            enableScroll();
        }

        if (productsInnerElement.classList.contains('active')) {
            document.addEventListener('click', function (event) {
                if (!event.composedPath().includes(productsInnerElement)) {
                    event.stopPropagation();
                    productsInnerElement.classList.remove('active');
                    toggleOverlay(false);
                    enableScroll();
                }
            });
        }
    });
}

function subcategoriesAction() {
    const categoryElements = document.querySelectorAll('.products__category');
    categoryElements.forEach(item => {
        item.addEventListener('click', (event) => {
            item.classList.toggle('active');
            toggleOverlay(true);
        });
    });
}

function toggleOverlay(condition) {
    const overlay = document.querySelector('.custom_overlay');
    if (condition === true) {
        overlay.style.display = 'block';
    } else if (condition === false) {
        overlay.style.display = 'none';
    }
}

function disableScroll() {
    document.body.style.overflow = 'hidden';
}

function enableScroll() {
    document.body.style.overflow = '';
}

