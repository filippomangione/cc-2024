const btnCheck = document.querySelector('.btn-check')
const boxes = document.querySelectorAll('.box');
const message = document.querySelector('.message');
let isEndGame = false;

const randomBoxIndex = Math.floor(Math.random() * 3);
console.log(randomBoxIndex);

function check () {
  console.log('check')
}

btnCheck.addEventListener('click', check);



// cups.forEach(function(cup, idx) {
//   cup.addEventListener('click', function() {
//     if (isEndGame) {
//       return;
//     }

//     console.log('cup', idx);
    
//     if (idx === fullCupIdx) {      
//       cup.classList.add('cup-full');
//       message.innerText = "Hai vinto :)";
//     } else {
//       cup.classList.add('cup-empty');
//       message.innerText = "Hai perso :(";
//     }

//     isEndGame = true;
//   });
// });

