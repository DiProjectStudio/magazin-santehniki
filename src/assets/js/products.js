document.addEventListener('DOMContentLoaded', () => {
    navbarAction();
    dropdownMenuAction();
});

document.addEventListener('resize', () => {
    debounce(navbarAction, 300);
    debounce(dropdownMenuAction, 300);
})


function navbarAction() {
    const navbarButton = document.getElementById('navbarButton');
    const navbarOverlay = document.querySelector('.navbar__overlay');
    const navbarWrapper = document.querySelector('.navbar__wrapper');
    const navbarMenu = document.querySelector('.navbar__menu');
    const dropdownJS = document.querySelector('.dropdown-menu-js');
    const triggers = document.querySelectorAll('.trig');
    const navbarClose = document.getElementById('navbarClose');

        navbarButton.addEventListener('click', () => {

            if (window.innerWidth < 1200) {
                if (dropdownJS.classList.contains('active')) {
                    navbarClose.style.right = '20px'
                } else {
                    navbarClose.style.right = '50%'
                }

                navbarButton.classList.toggle('active');
                navbarOverlay.classList.toggle('active');
                navbarWrapper.classList.toggle('active');
                navbarMenu.classList.toggle('active');

                triggers.forEach(item => {
                    if (item.classList.contains('active')) {
                        item.classList.remove('active');
                    }
                });

                if (navbarButton.classList.contains('active')) {
                    navbarClose.classList.add('active');

                    document.body.style.overflow = 'hidden';
                    document.addEventListener('click', function (event) {
                        event.stopPropagation();
                        if (!event.composedPath().includes(navbarWrapper)) {
                            navbarWrapper.classList.remove('active');
                            navbarOverlay.classList.remove('active');
                            navbarButton.classList.remove('active');
                            navbarMenu.classList.remove('active');
                            dropdownJS.classList.remove('active');
                            navbarClose.classList.remove('active');
                            removeDropdownElements(dropdownJS);
                            document.body.style.overflow = '';
                        }
                    });
                } else {
                    document.body.style.overflow = '';
                    navbarClose.classList.remove('active');
                }
            }
        });
}

function dropdownMenuAction() {
    const triggers = document.querySelectorAll('.trig');
    const navbarMenu = document.querySelector('.navbar__menu');
    const dropdownJS = document.querySelector('.dropdown-menu-js');
    const navbarClose = document.getElementById('navbarClose');

    triggers.forEach(trigger => trigger.addEventListener('click', (event) => {

        if (window.innerWidth < 744 || window.innerWidth >= 1200) {
            const dropdown = trigger.nextElementSibling;
            let totalHeight = 0;

            dropdown.querySelectorAll('.dropdown-item').forEach((el, index) => {
                if (window.innerWidth < 744) {
                    totalHeight += el.clientHeight + 6;
                }

                if (window.innerWidth >= 1200) {
                    totalHeight += el.clientHeight + 10;
                }
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

            const isActive = trigger.classList.contains('active');

            // Убираем класс active у всех триггеров
            triggers.forEach(t => t.classList.remove('active'));

            // Если текущий триггер не был активен, добавляем класс active
            if (!isActive) {
                trigger.classList.add('active');
                dropdownJS.classList.add('active');
                removeDropdownElements(dropdownJS);
                if (trigger.nextElementSibling) {
                    dropdownJS.appendChild(trigger.nextElementSibling.cloneNode(true));
                }
            }

            // Если хотя бы один пункт меню активен, то боковое меню с подкатегориями будет активным
            if ([...triggers].some(item => item.classList.contains('active'))) {
                dropdownJS.classList.add('active');
            } else {
                dropdownJS.classList.remove('active');
                removeDropdownElements(dropdownJS);
            }

            if (!dropdownJS.classList.contains('active')) {
                removeDropdownElements(dropdownJS);
                navbarClose.style.right = '';
            } else {
                navbarClose.style.right = '20px'
            }
        }
    }));
}

function removeDropdownElements(parent) {
    if (parent.childNodes.length > 0) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
}

function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(()=> {
            func.apply(this, args);
        }, delay);
    };
}










