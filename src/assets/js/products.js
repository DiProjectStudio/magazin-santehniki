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
    navbarAction();
    dropdownMenuAction();
});

document.addEventListener('resize', ()=> {
    dropdownMenuAction();
})

function navbarAction() {
    const navbarButton = document.getElementById('navbarButton');
    const navbarOverlay = document.querySelector('.navbar__overlay');
    const navbarWrapper = document.querySelector('.navbar__wrapper');
    const navbarMenu = document.querySelector('.navbar__menu');

    if (navbarButton) {
        navbarButton.addEventListener('click', (e) => {
            navbarButton.classList.toggle('active');
            navbarOverlay.classList.toggle('active');
            navbarWrapper.classList.toggle('active');
            navbarMenu.classList.toggle('active');
            if (navbarButton.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
                document.addEventListener('click', function (event) {
                    event.stopPropagation();
                    if (!event.composedPath().includes(navbarWrapper)) {
                        navbarWrapper.classList.remove('active');
                        navbarOverlay.classList.remove('active');
                        navbarButton.classList.remove('active');
                        navbarMenu.classList.remove('active')
                    }
                });
            } else {
                document.body.style.overflow = '';
            }

        });
    }
}

function dropdownMenuAction() {
    const triggers = document.querySelectorAll('.trig');
    triggers.forEach(trigger => trigger.addEventListener('click', (event) => {
        if (window.innerWidth < 744) {
            const dropdown = trigger.nextElementSibling;
            let totalHeight = 0;

            dropdown.querySelectorAll('.dropdown-item').forEach((el, index) => {
                totalHeight += el.clientHeight;
            });

            if (dropdown.style.height === "0px" || dropdown.style.height === "") {
                dropdown.style.height = totalHeight + "px";
                dropdown.previousElementSibling.classList.add('active');
            } else {
                dropdown.style.height = "0px";
                dropdown.previousElementSibling.classList.remove('active');
            }
        }

        if (window.innerWidth >= 744 && window.innerWidth < 1200) {
            const dropdownJS = document.querySelectorAll('.dropdown-menu-js');
            // по клику на категорию, происходит перенос подкатегорий во dropdown-js

        }

    }));


}










