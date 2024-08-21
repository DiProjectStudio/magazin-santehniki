document.addEventListener('DOMContentLoaded', () => {
    tabsAction()
    moveElements();
});

document.addEventListener('resize', () => {
    moveElements();
});


function tabsAction() {
    const tabButtons = document.querySelectorAll('.tabs__button');
    const tabPanes = document.querySelectorAll('.tabs__pane');

    tabButtons.forEach(tabButton => {
        tabButton.addEventListener('click', (event) => {
            const tabAttribute = tabButton.getAttribute('data-tab');

            // Удаляем класс active у всех кнопок и панелей
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Добавляем класс active к текущей кнопке и соответствующей панели
            tabButton.classList.add('active');
            document.getElementById(tabAttribute).classList.add('active');
        });
    });
}


function moveElements() {
    const productTitle = document.querySelector('.product .product__title');
    const productSpecifications = document.querySelector('.product .product__specifications');
    const destinationBlockRight = document.querySelector('.product__js-right');

    const productImages = document.querySelector('.product .product__images');
    const productAbout = document.querySelector('.product .product__about');
    const destinationBlockLeft = document.querySelector('.product__js-left');


    if ((productTitle && productSpecifications && productImages && productAbout) && window.innerWidth >= 1200) {
        destinationBlockRight.appendChild(productTitle);
        destinationBlockRight.appendChild(productSpecifications);
        destinationBlockLeft.appendChild(productImages);
        destinationBlockLeft.appendChild(productAbout);
    }
}