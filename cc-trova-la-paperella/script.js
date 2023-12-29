const boxes = document.querySelectorAll('.box');
const message = document.querySelector('.message');
let isEndGame = false;

const randomBoxIndex = Math.floor(Math.random() * 3);
console.log(randomBoxIndex);

boxes.forEach(function(box, i) {
  box.addEventListener('click', function() {
    if (isEndGame) return;
    
    if (i === randomBoxIndex) {      
      box.classList.add('duck');
      message.innerText = 'Hai vinto :)';
    } else {
      box.classList.add('water');
      message.innerText = 'Sbagliato!';
    }

    isEndGame = true;
  });
});
