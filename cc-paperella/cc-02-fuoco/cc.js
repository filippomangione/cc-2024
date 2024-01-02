// NON MODIFICARE QUESTO FILE
(function () {
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
  
  function draw () {
    boxes.forEach(function(box) {
      box.classList.remove('duck');
    });
  
    boxes[duckPosition].classList.add('duck');
  }
  
  function check () {
    const fire = document.querySelectorAll('.fire');
    return fire.length <= 0;
  }
  
  function main () {
    update();
    draw();
  
    if(check()) {
      message.innerText = 'Corretto!';
    }
  }
  
  setInterval(main, 1000);
}())

