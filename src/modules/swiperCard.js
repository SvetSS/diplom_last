import Swiper from 'swiper/bundle';

const swiperCard = () => {
    const swiper = new Swiper('.services-elements ', {
        slidesPerView: 3,
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
    console.log('nnn')
};

export default swiperCard;
