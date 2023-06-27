import { animate } from "./helpers";
const abouttCompany = () => {
    const numSection = document.querySelector('.num-section .row ');
    const elements = numSection.querySelectorAll('.col-sm-3');
    const elementsValue = numSection.querySelectorAll('.push30');

    console.log(elementsValue);
    let currentCount = 0;

    //elementsValue[0].textContent = currentCount;
    //elementsValue[0].classList.remove('visible-xs');
    elements.forEach(el => {
        el.style.display = 'none';
    });

    const deleteInvisible = () => {
        elementsValue.forEach(el => { el.classList.remove('visible-xs'); })
    };

    const animateBlock = () => {
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
    };

    let an = setTimeout(function () {
        animateBlock();
        deleteInvisible();
    }, 2000)


    const countOfOrder = (i, stopCount, text) => {
        currentCount = 1;
        const countInInterval = setInterval(() => {
            currentCount += 1;
            elementsValue[i].textContent = currentCount;
            //console.log(elementsValue[0].textContent);

            if (elementsValue[i].textContent >= stopCount) {
                clearInterval(countInInterval);
                elementsValue[i].textContent = text;
            }
        }, 15);
    };
    /*  const countOfOrder = () => {
         currentCount = 1;
         const countInInterval = setInterval(() => {
             currentCount += 1;
             elementsValue[0].textContent = currentCount;
             console.log(elementsValue[0].textContent);
 
             if (elementsValue[0].textContent >= 75) {
                 clearInterval(countInInterval);
             }
         }, 15);
     }; */

    window.onload = () => {
        an;
        countOfOrder(0, 75, 75);
        countOfOrder(1, 15, 'по сей день');
        countOfOrder(2, 60, '60 минут');
        countOfOrder(3, 101, 101);
    };



    console.log(elements);
    console.log(numSection);

}

export default abouttCompany;
