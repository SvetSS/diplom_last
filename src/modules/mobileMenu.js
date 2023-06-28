const mobileMenu = () => {

    const mobileMenuSec = document.querySelector('.mobile-menu');
    const mobMenuBtn = document.querySelector('.mob-menu-btn');
    const closeBtn = mobileMenuSec.querySelector('.mobile-menu-close');

    const handleMenu = () => {
        mobileMenuSec.classList.toggle('open');

    };

    mobileMenuSec.addEventListener('click', e => {

        if (e.target === closeBtn || e.target.matches('.mobile-menu>ul>li>a') || e.target.matches('.mobile-menu>a.callback-btn')) {

            mobileMenuSec.classList.toggle('open');

        }
    });
    mobMenuBtn.addEventListener('click', handleMenu);

}

export default mobileMenu;