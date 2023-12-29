const boxes = document.querySelectorAll('.box');
const btnCheck = document.querySelector('.btn-check');
const userInput = document.querySelector('.user-input');
const message = document.querySelector('.message');

const randomBoxIndex = Math.floor(Math.random() * 3) + 1;
console.log(randomBoxIndex);

function check() {
  const selectedBoxIndex = Number(userInput.value);
  console.log(`Hai scelto la scatola: ${selectedBoxIndex}.`);

  if (!selectedBoxIndex) {
    message.innerText = `Inserisci un numero da 1 a 3`;
    return;
  }

  const box = boxes[selectedBoxIndex - 1];
  
  if (selectedBoxIndex === randomBoxIndex) {
    box.classList.add('duck');    
    message.innerText = `Hai vinto :)`;
  } else {
    box.classList.add('water');
    message.innerText = `Hai perso :(`;
  }
}

btnCheck.addEventListener('click', check);
