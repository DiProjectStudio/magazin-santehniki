document.addEventListener('DOMContentLoaded', () => {
    navbarAction();
    dropdownMenuAction();
});

window.addEventListener('resize', () => {
    debounce(navbarAction, 100);
    hideMobileElements();
    debounce(dropdownMenuAction, 100);
})


function navbarAction() {
    const navbarButton = document.getElementById('navbarButton');
    const navbarOverlay = document.querySelector('.navbar__overlay');
    const navbarWrapper = document.querySelector('.navbar__wrapper');
    const navbarMenu = document.querySelector('.navbar__menu');
    const dropdownJS = document.querySelector('.dropdown-menu-js');
    const triggers = document.querySelectorAll('.trig');
    const navbarClose = document.getElementById('navbarClose');

    if (!navbarButton) return;

    const toggleActiveClasses = (isActive) => {
        navbarButton.classList.toggle('active', isActive);
        navbarOverlay.classList.toggle('active', isActive);
        navbarWrapper.classList.toggle('active', isActive);
        navbarMenu.classList.toggle('active', isActive);
        navbarClose.classList.toggle('active', isActive);
        document.body.style.overflow = isActive ? 'hidden' : '';

        triggers.forEach(item => item.classList.remove('active'));
    };

    const handleNavbarClick = (ev) => {
        if (window.innerWidth < 1200) {
            navbarClose.style.right = dropdownJS.classList.contains('active') ? '20px' : '50%';
            const isActive = !navbarButton.classList.contains('active');
            toggleActiveClasses(isActive);

            if (isActive) {
                document.addEventListener('click', handleDocumentClick);
            } else {
                document.removeEventListener('click', handleDocumentClick);
            }
        }
    };

    const handleDocumentClick = (event) => {
        event.stopPropagation();
        if (!event.composedPath().includes(navbarWrapper)) {
            toggleActiveClasses(false);
            dropdownJS.classList.remove('active');
            removeDropdownElements(dropdownJS);
        }
    };

    navbarButton.addEventListener('click', handleNavbarClick);
}

function dropdownMenuAction() {
    const triggers = document.querySelectorAll('.trig');
    const dropdownJS = document.querySelector('.dropdown-menu-js');
    const navbarClose = document.getElementById('navbarClose');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', (event) => {
            const dropdown = trigger.nextElementSibling;

            if (window.innerWidth < 744 || window.innerWidth >= 1200) {
                handleDropdownHeight(dropdown, trigger);
            } else if (window.innerWidth >= 744 && window.innerWidth < 1200) {
                handleActiveState(trigger);
            }
        });
    });

    function handleDropdownHeight(dropdown, trigger) {
        let totalHeight = Array.from(dropdown.querySelectorAll('.dropdown-item')).reduce((acc, el) => {
            return acc + el.clientHeight + (window.innerWidth < 744 ? 6 : 10);
        }, 0);

        dropdown.style.height = dropdown.style.height === "0px" || dropdown.style.height === "" ? `${totalHeight}px` : "0px";
        trigger.classList.toggle('active', dropdown.style.height !== "0px");
    }

    function handleActiveState(trigger) {
        const isActive = trigger.classList.contains('active');

        triggers.forEach(t => t.classList.remove('active'));

        if (!isActive) {
            trigger.classList.add('active');
            dropdownJS.classList.add('active');
            removeDropdownElements(dropdownJS);
            if (trigger.nextElementSibling) {
                dropdownJS.appendChild(trigger.nextElementSibling.cloneNode(true));
            }
        }

        dropdownJS.classList.toggle('active', [...triggers].some(item => item.classList.contains('active')));
        navbarClose.style.right = dropdownJS.classList.contains('active') ? '20px' : '';
    }
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
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function hideMobileElements() {
    const elementsToHide = [
        document.getElementById('navbarButton'),
        document.querySelector('.navbar__overlay'),
        document.querySelector('.navbar__wrapper'),
        document.querySelector('.navbar__menu'),
        document.getElementById('navbarClose')
    ];

    if (window.innerWidth >= 1200) {
        elementsToHide.forEach(element => {
            if (element.classList.contains('active')) {
                element.classList.remove('active');
            }
        });
    }
}










