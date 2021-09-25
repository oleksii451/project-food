import tabs from'./modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';
import {createModal} from './modules/modal';


window.addEventListener('DOMContentLoaded', () => {
        const modalTimer = setTimeout(() => createModal('.modal', modalTimer), 50000);
                tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
                cards();
                timer('.timer', '2021-10-05');
                modal('[data-modal]', '.modal', modalTimer);
                calc();
                forms('form', modalTimer);
                slider({
                        container: '.offer__slider',
                        nextArrow: '.offer__slider-next',
                        prevArrow: '.offer__slider-prev',
                        totalCounter: '#total',
                        currentCounter: '#current',
                        wrapper: '.offer__slider-wrapper',
                        field: '.offer__slider-inner',
                        slide: '.offer__slide'
                });
});





























