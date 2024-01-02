// 1 - Crea un pulsante nell'HTML che al "click" stampi "QUACK!" in console
const btnAction = document.querySelector('.btn-action');

function quack () {
  console.log('QUACK!');
}

btnAction.addEventListener('click', quack);

