const buttons = document.querySelectorAll('.btn-state');
const box = document.querySelector('.box');
const message = document.querySelector('.message');

const duckState = Math.round(Math.random());
let isEndGame = false;

console.log(duckState);

buttons.forEach(function(btn, idx) {
  btn.addEventListener('click', function() {

    if(isEndGame) return;

    box.classList.add('duck-' + duckState);
    
    if(idx === duckState) {
      console.log('hai indovinato!')  
      message.innerText = 'Hai indovinato :)';
    } else {
      console.log('hai sbagliato!')
      message.innerText = 'Hai sbagliato :(';
    }

    isEndGame = true;
  });  
});



