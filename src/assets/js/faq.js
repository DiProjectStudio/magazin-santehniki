document.addEventListener("DOMContentLoaded", () => {
    faqAction();
})


function faqAction() {
    const closeButtons = document.querySelectorAll('.faq__item_top_close');
    const faqItems = document.querySelectorAll('.faq__item');

    closeButtons.forEach(closeButton => {
        closeButton.addEventListener('click', (event)=> {
            closeButton.parentNode.parentElement.classList.toggle('active');
            console.log(closeButton.parentElement.parentElement);
        });
    });
}