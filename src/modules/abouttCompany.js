import { animate } from "./helpers";
const abouttCompany = () => {
    const numSection = document.querySelector('.num-section .row ');
    const elements = numSection.querySelectorAll('.col-sm-3');

    elements.forEach(el => {
        el.style.display = 'none';
    });

    let an = setTimeout(function () {
        elements.forEach(el => {
            animate({
                duration: 1000,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    el.style.display = 'block';
                    el.style.opacity = progress;
                }
            });
        });
    }, 2000)

    window.onload = () => {

        an();


    };


    console.log(elements);
    console.log(numSection);

}

export default abouttCompany;
