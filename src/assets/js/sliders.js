$(document).ready(function () {
    const slider = new Swiper(".about__history_slider.swiper", {
        slidesPerView: 1,
        navigation: {
            nextEl: '.about__history .slider-arrow--next',
            prevEl: '.about__history .slider-arrow--prev',
        },

        on: {
            slideChange: function () {
                const nextArrow = document.querySelector('.about__history .slider-arrow--next');
                const prevArrow = document.querySelector('.about__history .slider-arrow--prev');

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
    });

    const slides = document.querySelectorAll('.style .swiper-slide');

    sliderClone('.style');
    const sliderStyle = new Swiper('.style__slider.swiper', {

        slidesPerView: 1,
        navigation: {
            nextEl: '.style .slider-arrow--next',
            prevEl: '.style .slider-arrow--prev',
        },
        spaceBetween: 20,
        loop: true,
        breakpoints: {
            744: {
                slidesPerView: 3,
                centeredSlides: true,
                centeredSlidesBounds: true,
                spaceBetween: 20,
            },
        },
    });

    const thumbs = new Swiper('.product__images_thumbs.swiper', {
        slidesPerView: 4,
        direction: 'vertical',
        spaceBetween: 12,
        mousewheel: true
    })


    const productImageSlider = new Swiper('.product__images_main.swiper', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.product .slider-arrow--next',
            prevEl: '.product .slider-arrow--prev',
        },
        loop: true,
        thumbs: {
            swiper: thumbs
        }
    });


    const certificatesSlider = new Swiper('.certificates .swiper', {
        slidesPerView: 1,
        loop: true,
    });

});

function sliderClone(parent) {
    const allSlides = document.querySelectorAll(`${parent} .swiper-slide`);
    const slidesCount = allSlides.length;
    let iterationCount = 0;

    if (slidesCount >= 9 || !slidesCount) {
        return;
    }

    iterationCount = Math.floor(9 / slidesCount);
    for (let i = 0; i < iterationCount - 1; i++) {
        allSlides.forEach(slide => {
            const slidesParent = slide.parentElement;
            let clonedSlide = slide.cloneNode(true);
            slidesParent.appendChild(clonedSlide);
        });
    }
}

