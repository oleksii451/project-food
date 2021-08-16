'use strict';

// function showThis(a,b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4,5);


// 1)обычная функция: this = wimdow, но если если use strict (strict mode) то undefined;
// 2)контекст у методов обьекта - сам обьект
// 3)this в конструкторах и классах - это новый экземпляр обьекта
//4) ручная привязка this через bind apply call



const b = document.querySelector('button');
b.addEventListener('click', function(e) {
  e.target.style.backgroundColor = 'red';
});