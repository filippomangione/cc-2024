// 1 - Seleziona TUTTI i <div> con classe "box"
const boxes = document.querySelectorAll('.box');

// 2 - Cicla TUTTI i <div> con classe "box"
// e rimuovi la classe "fire"
boxes.forEach(function(box) {
  box.classList.remove('fire');
});