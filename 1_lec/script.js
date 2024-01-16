// const heading = document.querySelector('.title');
// console.log(heading);
// const heading2 = document.getElementById('heading');
// console.log(heading2);
// const heading3 = document.querySelector('#heading');
// console.log(heading3);


// const text = document.querySelectorAll('.text');

// text.forEach(element => {
//     console.log(element);
// });

// const titleEl = document.querySelector('.title');
// titleEl.textContent = 'Заголовок из js';

// const heading2 = document.querySelector('#heading');
// heading2.remove();

const buttonEl = document.querySelector('.btn');
const contentEl = document.querySelector('.content');
const imgEl = document.querySelector('.img');

imgEl.onclick = function () {
    imgEl.src = 'newphoto.jpg';
}

const textEl = document.createElement('p');
textEl.textContent = 'Тут любой текст из js';

buttonEl.onclick = function () {
    buttonEl.textContent = 'Товар в корзине';
    contentEl.appendChild(textEl);
}
