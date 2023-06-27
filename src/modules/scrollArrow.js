const scrollArrow = () => {
    const upArrow = document.querySelector('#upArrow');

    window.addEventListener('scroll', () => {

        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        const servicesSection = document.getElementById('services');
        const servicesSectionPosition = servicesSection.offsetTop;
        if (scrollPosition < servicesSectionPosition) {
            upArrow.style.display = 'none';
        } else {
            upArrow.style.display = 'block';
        }
    });

    upArrow.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

export default scrollArrow;
