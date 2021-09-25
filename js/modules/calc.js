function calc(){
    // calc

    const result = document.querySelector(".calculating__result span");
    let sex,age,height,weight,ratio;



    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if (localStorage.getItem('activity')) {
        ratio = localStorage.getItem('activity');
    } else {
        ratio = 1.375;
        localStorage.setItem('activity', 1.375);
    }
    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.classList.remove(activeClass);
            if (elem.getAttribute('id') === localStorage.getItem("sex")) {
                elem.classList.add(activeClass);
            }
            if (elem.getAttribute('data-ratio') === localStorage.getItem("activity")) {
                elem.classList.add(activeClass);
            }
        });
    }

    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');
    function totalCalc() {
        if(!sex || !age|| !height|| !weight|| !ratio) {
            result.innerHTML = '____';
            return;
        }
        if(sex === 'female') {
            result.innerHTML = Math.round((447.6 + (9.2 * weight) + (3.1 * height)- (4.3 * age)) * ratio);
        } else {
            result.innerHTML = Math.round((88.36 + (13.4 * weight) +(4.8 * height)- (5.73 * age)) * ratio);

        }
    }

    totalCalc();

    function getStaticInformation(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(element => {
            element.addEventListener('click', (elem) =>{
                if (elem.target.getAttribute('data-ratio')) {
                    ratio = +elem.target.getAttribute('data-ratio');
                    localStorage.setItem('activity', +elem.target.getAttribute('data-ratio'));
                } else {
                    sex = elem.target.getAttribute('id');
                    localStorage.setItem('sex', elem.target.getAttribute('id'));
                }

                elements.forEach(element => {
                    element.classList.remove(activeClass);
                });

                elem.target.classList.add(activeClass);

                totalCalc();
            });
        });

    }
    getStaticInformation('#gender div', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big div ', 'calculating__choose-item_active');

    function getDynamicInformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () =>{

            if (input.value.match(/\D/g)) {
                input.style.border = '2px solid red';
            } else {
                input.style.border = 'none';
            }
            switch(input.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            }
            totalCalc();
        });

    }

    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');

}

export default calc;