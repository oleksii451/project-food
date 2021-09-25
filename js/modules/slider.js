function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}){
    let slideNo = 1;
    let offset = 0;
    const slides = document.querySelectorAll(slide);
    const next = document.querySelector(nextArrow);
    const prev = document.querySelector(prevArrow),
        total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width,
        slider = document.querySelector(container);

    slider.style.position = 'relative';

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';


    function regularTrans (x) {
        return +x.replace(/\D/g, '');
    }

    function zeroAndNumber () {
        if (slides.length < 10) {
            total.textContent = `0${slides.length}`;
            current.textContent = `0${slideNo}`;
        } else {
            total.textContent = `${(slides.length)}`;
            current.textContent = slideNo;
        }
    }
    zeroAndNumber();

    function showNeededDot() {
        dotsMassive.forEach(elem => elem.style.opacity = '.5');
        dotsMassive[slideNo - 1].style.opacity = '1';
    }

    slides.forEach(slide => {
        slide.style.width = width;
    });

    next.addEventListener('click', () => {
        if (offset == regularTrans(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += regularTrans(width);
        }

        if (slideNo == slides.length) {
            slideNo = 1;
        } else {
            slideNo++;
        }

        zeroAndNumber();

        slidesField.style.transform = `translateX(-${offset}px)`;

        showNeededDot();
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = regularTrans(width) * (slides.length - 1);
        } else {
            offset -= regularTrans(width);
        }

        if (slideNo == 1) {
            slideNo = slides.length;
        } else {
            slideNo--;
        }

        zeroAndNumber();

        slidesField.style.transform = `translateX(-${offset}px)`;

        showNeededDot();
    });

    const dots = document.createElement('ol'),
        dotsMassive = [];
    dots.classList.add('carousel-indicator');
    dots.style.cssText = `
         position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;

    //dots.classList.add('.dot\carousel-indicators');
    slider.append(dots);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText=`box-sizing: content-box;
                            flex: 0 1 auto;
                            width: 30px;
                            height: 6px;
                            margin-right: 3px;
                            margin-left: 3px;
                            cursor: pointer;
                            background-color: #fff;
                            background-clip: padding-box;
                            border-top: 10px solid transparent;
                            border-bottom: 10px solid transparent;
                            opacity: .5;
                            transition: opacity .6s ease;
        `;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        dots.append(dot);
        dotsMassive.push(dot);

        dotsMassive.forEach(elem => {
            elem.addEventListener('click', (e) => {
                const slideTo = e.target.getAttribute('data-slide-to');

                slideNo = slideTo;
                offset = regularTrans (width) * (slideTo - 1);
                slidesField.style.transform = `translateX(-${offset}px)`;

                zeroAndNumber();
                showNeededDot();
            });
        });
    }
}

export default slider;