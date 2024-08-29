const showBtn = document.querySelector('.show-more-btn');

if (showBtn) {
    showBtn.addEventListener('click', ()=> {
        document.querySelector('.text-overflow').classList.add('expanded');
        showBtn.style.display = 'none';
    })
}

