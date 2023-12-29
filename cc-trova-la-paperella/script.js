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

/*
const btnCheck = document.querySelector('.btn-check');
const userInput = document.querySelector('.user-input');
const boxes = document.querySelectorAll('.box');
const message = document.querySelector('.message');
let isEndGame = false;

const randomBoxIndex = Math.floor(Math.random() * 3);
console.log(randomBoxIndex);

function check () {
  const userValue = userInput.value;
  console.log('check', userValue)

  if (userValue === '') { 
    message.innerText = 'Inserisci un numero da 1 a 3';
    return;
  } 
  
  if(userValue === randomBoxIndex) {
    message.innerText = 'Hai vinto :)';
  } else {
    message.innerText = 'Hai perso :(';
  }
}


btnCheck.addEventListener('click', check);
*/




