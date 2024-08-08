function navbar() {
    const burgerToggle = document.getElementById('burgerToggle');
    burgerToggle.addEventListener('click', (event)=> {

        event.stopPropagation();
    });
}