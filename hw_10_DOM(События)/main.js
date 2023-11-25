//! 1 По нажатию клавиш меняйте цвет заднего фон - body
//! R - red
//! G - green;
//! B - blue;
//! W - white;
//! SHIFT + B - black
//! SHIFT + G - gray;


// let lokKey = []
// document.addEventListener('keydown', (event) => {
//     console.log(event.key);
//     if(event.key === 'r' || event.key === 'R') {
//     document.body.style.backgroundColor = 'red'
//     }else if(event.key === 'g' || event.key === 'G'){
//         document.body.style.backgroundColor = 'green'
//     }else if(event.key === 'b' || event.key === 'B'){
//         document.body.style.backgroundColor = 'blue'
//     }else if(event.key === 'w' || event.key === 'W'){
//         document.body.style.backgroundColor = 'white'
//     }

//     lokKey.push(event.key)

//     if (lokKey[lokKey.length - 2] === 'Shift' && event.key === 'B') {
//         document.body.style.backgroundColor = 'black'
//     }else if(lokKey[lokKey.length - 2] === 'Shift' && event.key === 'G') {
//         document.body.style.backgroundColor = 'gray'
//     }
// }) 

// ! Создайте переменную let i=0, по нажатию на кнопку выводите в консоль переменную i и увеличивайте её в 2 раза;

// document.addEventListener('DOMContentLoaded', function() {
//     let i = 0;

//     const But = document.getElementById('But');

//     But.addEventListener('click', function() {
//         console.log(i);

//         i *= 2;
//     });
// });

// ! Вставьте картинку и кнопку в html. При нажатии на кнопку скройте картинку путем затухания до прозрачного состояния.

// function fad() {
//     const image = document.getElementById("myImage");
//     image.style.opacity = 0;
//   }
// const r = document.getElementById('myImage')
// myImage.style = 'transition: opacity 1s ease-in-out'



    

//! Создайте h1 с классом "output-text". Создайте input type="text" с классом "input-text". При каждом изменении ".input-text" меняйте содержимое ".output-text" на значение из ".input-text".

// function updateOutputText(value) {
//     const outputText = document.querySelector(".output-text");
//     outputText.textContent = value;
//   }
  
// ! Создайте div размером 500px * 500px, по нажатию на неё выводите в консоль позицию места куда вы нажали относительно div- а;
 
// const div = document.getElementById('box')

// div.addEventListener('click', (event) => {
//     console.log(`Координаты мыши: x=${event.clientX}, y=${event.clientY}`)
// })


// ! Создайте input type color. При изменении инпута меняйте цвет заднего фона body на значение из этого инпута

// const LogColor = document.getElementById('LogColor')
// LogColor.addEventListener('input' , function () {
//     document.body.style.backgroundColor = LogColor.value
// })
    

// ! Создайте гоночную игру с двумя машинами. Когда кнопка старта нажата, две машины должны двигаться по экрану, пока одна из них не окажется в другом конце экрана. Когда один из блоков дойдет до конца - вы должны поздравить победителя при помощи модального окна.
