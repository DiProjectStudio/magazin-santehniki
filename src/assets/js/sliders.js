$(document).ready(function () {


    const slider = new Swiper(".swiper", {
        slidesPerView: 1,
        observer: true,
        observeParents: true,

        navigation: {
            nextEl: '.about__history_slider .slider-arrow--next',
            prevEl: '.about__history_slider .slider-arrow--prev',
        },

        on: {
            slideChange: function () {
                const nextArrow = document.querySelector('.about__history_slider .slider-arrow--next');
                const prevArrow = document.querySelector('.about__history_slider .slider-arrow--prev');

                if (this.isEnd) {
                    nextArrow.classList.add('disabled');
                } else {
                    nextArrow.classList.remove('disabled');
                }

                if (this.activeIndex === 0) {
                    prevArrow.classList.add('disabled')
                } else {
                    prevArrow.classList.remove('disabled')
                }
            }
        }

        // breakpoints: {
        //     744: {
        //         slidesPerView: 3,
        //         spaceBetween: 20,
        //     },
        //
        //     1560: {
        //         slidesPerView: 3,
        //         spaceBetween: 30,
        //     }
        // }
    });
});


function changeArrowColor() {

}


