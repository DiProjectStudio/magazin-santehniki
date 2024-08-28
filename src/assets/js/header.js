document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.style.transform = 'translateY(12px)';
    } else {
        header.style.transform = 'translateY(0)';
    }
});

document.addEventListener('DOMContentLoaded', ()=> {
    deleteLinkClass();
});

document.addEventListener('resize', () => {
    deleteLinkClass();
})