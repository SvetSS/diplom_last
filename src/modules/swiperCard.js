import Swiper from 'swiper';

const swiperCard = () => {
    const swiper = new Swiper('.services-elements .swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
    console.log('nnn')
};

export default swiperCard;
