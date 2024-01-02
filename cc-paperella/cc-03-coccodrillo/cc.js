// NON MODIFICARE QUESTO FILE
(function () {
  
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

