const duck = document.querySelector('.duck');
const boxes = document.querySelectorAll('.box');
const message = document.querySelector('.message');
const checkBtn = document.querySelector('.check');

let duckPosition = 0;
  
function update () {
  duckPosition = duckPosition + 1;
  if(duckPosition > boxes.length - 1) {
    duckPosition = 0;
  } 
}


/*
const actions = ['stay', 'run', 'jump'];
let action = actions[0];

if (action === 'jump') {
  boxes[0].classList.remove('duck');
  boxes[0].classList.add('water');
  boxes[2].classList.add('duck');
} else if (action === 'run' || action === undefined) {
  boxes[0].classList.remove('duck');
  boxes[0].classList.add('water');
  boxes[1].classList.add('duck');
}
*/