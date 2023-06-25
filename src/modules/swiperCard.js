import Swiper from 'swiper/bundle';

const swiperCard = () => {
    const swiper = new Swiper('.services-elements ', {
        slidesPerView: 1,
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
        spaceBetween: 30,
        autoplay: {
            delay: 2000,
        },
        freeMode: true,
        pagination: {
            el: ".swiper-pagination ",
            clickable: true,
        },
        loop: true,
        navigation: {
            nextEl: ' .arrow-right',
            prevEl: '.arrow-left ',
        },

    });
};

export default swiperCard;
