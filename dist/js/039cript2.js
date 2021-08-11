const stopbutton = document.querySelector('.btn');





  function myAnimation() {
      const elem = document.querySelector('.box');
      let posx = 0;
      let timerId = setInterval(frame, 5);
      function frame() {
          if (posx == 300) {
              clearInterval(timerId);
          } else {
              posx++;
              elem.style.top = posx + 'px';
              elem.style.left = posx + 'px';
          }
      }
  }
stopbutton.addEventListener('click', myAnmation);