const scrollArrow = () => {
    const upArrow = document.querySelector('#upArrow');

    window.addEventListener('scroll', () => {

        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        const servicesSection = document.getElementById('services');
        const servicesSectionPosition = servicesSection.offsetTop;
        if (scrollPosition > servicesSectionPosition) {

            upArrow.style.display = 'block';
        } else {

            upArrow.style.display = 'none';
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
