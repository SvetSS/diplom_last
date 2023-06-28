import Swiper from 'swiper/bundle';

const advantages = () => {
    const swiper = new Swiper('.steps ', {
        slidesPerView: 1,
        breakpoints: {
            768: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
        spaceBetween: 30,
        autoplay: {
            delay: 3000,
        },
        freeMode: true,
        loop: true,
        navigation: {
            nextEl: ' .arrow-right',
            prevEl: '.arrow-left ',
        },

    });
};

export default advantages;
