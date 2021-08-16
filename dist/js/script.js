window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent () {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach (item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    } );

    const deadline = '2021-10-05';

    function getTimeRemaining (endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor((t / (24*60*60*1000))),
            hours = Math.floor((t / (1000*60*60) % 24)),
            minutes = Math.floor((t / (1000*60)) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days' : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds,
        };
    }

    function addZero(elem) {
        if (elem >= 0 && elem < 10) {
            return '0' + elem;
        } else {
            return elem;
        }
    }


    function setClock (selector, endtime) {
        const timer = document.querySelector(selector),
            days = document.querySelector('#days'),
            hours = document.querySelector('#hours'),
            minutes = document.querySelector('#minutes'),
            seconds = document.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = addZero(t.days);
            hours.innerHTML = addZero(t.hours);
            minutes.innerHTML = addZero(t.minutes);
            seconds.innerHTML = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    // MODAL

    const modalButtons = document.querySelectorAll('[data-modal]');
    console.log(modalButtons);
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('[data-close]');


    function createModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimer);
    }
    function closeModal() {
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);
    modalButtons.forEach(btn => {
        btn.addEventListener('click', createModal); // forgot to write BTN!!
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) { // написаол еще через классы
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
       if (e.code === 'Escape' && modal.classList.contains('show')) {
           closeModal();
       }
    });

    const modalTimer = setTimeout(createModal, 10000);

    function showModalByScroll () {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            createModal();
            window.removeEventListener('scroll', showModalByScroll);
            }
        }

    window.addEventListener('scroll', showModalByScroll);

   // here are classes and etc
    class Daymenu {
        constructor(image, subtitle, descr, price, parentSelector) {
            this.Image = image;
            this.Subtitle = subtitle;
            this.Descr = descr;
            this.Price = price;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.Price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            element.innerHTML = `
                    <div class="menu__item">
                        <img src=${this.Image} alt="vegy">
                        <h3 class="menu__item-subtitle">${this.Subtitle}</h3>
                        <div class="menu__item-descr">${this.Descr}</div>
                        <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                            <div class="menu__item-cost">Цена:</div>
                            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                        </div>
                    </div>
            `;
            this.parent.append(element);
        }
    }

    new Daymenu(
        "img/tabs/vegy.jpg",
        "Меню \"Фитнес\"",
        "Меню \"Фитнес\" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
        9,
        '.menu .container'
    ).render();

    new Daymenu(
        "img/tabs/vegy.jpg",
        "Меню \"Фитнес\"",
        "Меню \"Фитнес\" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
        9,
        '.menu .container'
    ).render();

    new Daymenu(
        "img/tabs/vegy.jpg",
        "Меню \"Фитнес\"",
        "Меню \"Фитнес\" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
        9,
        '.menu .container'
    ).render();

});