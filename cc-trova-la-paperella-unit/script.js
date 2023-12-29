const boxes = document.querySelectorAll('.box');
const btnCheck = document.querySelector('.btn-check');
const message = document.querySelector('.message');

const randomBoxIndex = Math.floor(Math.random() * 3) + 1;
console.log(randomBoxIndex);

function check() {
  const selectedBoxIndex = 2;
  const box = boxes[selectedBoxIndex - 1];
  message.innerText = `Hai scelto la scatola: ${selectedBoxIndex}`;
  console.log('check', randomBoxIndex);

  if (selectedBoxIndex === randomBoxIndex) {      
    box.classList.add('duck');
    message.innerText = 'Hai vinto :)';
  } else {
    box.classList.add('water');
    message.innerText = 'Sbagliato!';
  }
}

btnCheck.addEventListener('click', check);
