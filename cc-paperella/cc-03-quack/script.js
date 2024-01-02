const duck = document.querySelector('.duck');
const boxes = document.querySelectorAll('.box');
const message = document.querySelector('.message');
const btnAction = document.querySelector('.btn-action');

function quack () {
  console.log('QUACK!');
}

btnAction.addEventListener('click', quack);

