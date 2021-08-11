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
    }
    function closeModal() {
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);
    modalButtons.forEach(btn => {
        addEventListener('click', createModal);
    });
    // modalButtons.addEventListener('click', createModal); does not work


});