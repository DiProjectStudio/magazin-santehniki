document.addEventListener("DOMContentLoaded", () => {
    faqAction();
})


function faqAction() {
    const actionElements = document.querySelectorAll('.faq__item');
    const faqItems = document.querySelectorAll('.faq__item');

    actionElements.forEach(item => {
        item.addEventListener('click', (event)=> {
            item.classList.toggle('active');
        });
    });
}