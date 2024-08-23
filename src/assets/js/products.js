// document.addEventListener('DOMContentLoaded', () => {
//     categoriesMenuAction();
//     categoriesAction();
//     document.addEventListener('resize', () => {
//         categoriesAction();
//     });
// })
//
//
// function categoriesMenuAction() {
//     const categoriesActionButton = document.querySelector('.products__top');
//     const categoriesElement = document.querySelector('.products__categories');
//     const productsInnerElement = document.querySelector('.products__inner');
//     const categoryElements = document.querySelectorAll('.products__category');
//
//     categoriesActionButton.addEventListener('click', (e) => {
//         if (window.innerWidth >=744) {
//             restoreMaxWidth();
//         }
//
//         e.stopPropagation();
//         categoryElements.forEach(element => {
//             element.classList.remove('active');
//             const subcategories = element.querySelector('.products__subcategories');
//             if (subcategories) {
//                 subcategories.style.display = 'none';
//             }
//         });
//
//         productsInnerElement.classList.toggle('active');
//         if (productsInnerElement.classList.contains('active')) {
//             toggleOverlay(true);
//             disableScroll();
//         } else {
//             toggleOverlay(false);
//             enableScroll();
//         }
//
//         if (productsInnerElement.classList.contains('active')) {
//             document.addEventListener('click', function (event) {
//                 if (!event.composedPath().includes(productsInnerElement)) {
//                     productsInnerElement.classList.remove('active');
//                     toggleOverlay(false);
//                     enableScroll();
//                 }
//             });
//         }
//     });
// }
//
// function categoriesAction() {
//
//     const categoryElements = document.querySelectorAll('.products__category');
//
//     categoryElements.forEach(item => {
//         item.addEventListener('click', (event) => {
//             // Закрываем все открытые подкатегории
//
//             if (window.innerWidth >= 720 && window.innerWidth < 1200) {
//                 categoryElements.forEach(element => {
//                     if (element !== item) {
//                         element.classList.remove('active');
//                         const subcategories = element.querySelector('.products__subcategories');
//                         if (subcategories) {
//                             subcategories.style.display = 'none';
//                             toggleOverlay(true);
//                         }
//                     }
//                 });
//             }
//
//             // Переключаем текущую категорию
//             item.classList.toggle('active');
//             if (window.innerWidth >= 744 && window.innerWidth < 1200) {
//                 if (item.classList.contains('active')) {
//                     changeMaxWidth();
//                 } else {
//                     restoreMaxWidth();
//                 }
//             }
//
//
//             const subcategories = item.querySelector('.products__subcategories');
//             if (subcategories) {
//                 if (item.classList.contains('active')) {
//                     subcategories.style.display = 'grid';
//                     toggleOverlay(true);
//                 } else {
//                     subcategories.style.display = 'none';
//                     toggleOverlay(true);
//                 }
//             }
//         });
//     });
// }
//
// function toggleOverlay(condition) {
//     const overlay = document.querySelector('.custom_overlay');
//     if (condition === true) {
//         overlay.style.display = 'block';
//     } else if (condition === false) {
//         overlay.style.display = 'none';
//     }
// }
//
// function disableScroll() {
//     document.body.style.overflow = 'hidden';
// }
//
// function enableScroll() {
//     document.body.style.overflow = '';
// }
//
// function changeMaxWidth() {
//     const categoriesElement = document.querySelector('.products__categories');
//     const categoryElements = document.querySelectorAll('.products__category');
//     categoriesElement.style.maxWidth = '100%';
//     categoryElements.forEach(item => {
//         item.style.maxWidth = 'calc(50% + 22px)';
//     })
// }
//
// function restoreMaxWidth() {
//     const categoriesElement = document.querySelector('.products__categories');
//     const categoryElements = document.querySelectorAll('.products__category');
//     categoriesElement.style.maxWidth = 'calc(50% + 22px)';
//     categoryElements.forEach(item => {
//         item.style.maxWidth = '100%';
//     })
// }


document.addEventListener('DOMContentLoaded', () => {
    buttonAction();
    // categoryAction();
});

function buttonAction() {
    const catalogButton = document.querySelector('.catalog__button');
    const catalogWrapper = document.querySelector('.catalog__wrapper');
    const catalogWrapperJs = document.querySelector('.catalog__wrapper-js');

    catalogButton.addEventListener('click', () => {
        catalogButton.classList.toggle('active'); // добавляет класс active к кнопке Каталог товаров
        catalogButton.nextElementSibling.classList.toggle('active'); // переворачивает стрелку у кнопки
        catalogWrapper.classList.toggle('active'); // делает видимым основные категории
        catalogWrapperJs.appendChild(catalogWrapper); // переносит 
        catalogWrapperJs.classList.toggle('active');

    });
}





