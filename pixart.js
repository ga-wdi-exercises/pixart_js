var form = document.querySelector("#form")
var brush = document.querySelector(".brush")
var input = document.querySelector("#color-field")
var button = document.querySelector("#set-color");

form.addEventListener('submit', function(event){
  event.preventDefault();
  brush.style.backgroundColor = input.value;
});

form.addEventListener('onkeydown', function(event){
  event.preventDefault();
  brush.style.backgroundColor = input.value;
});



// for(x = 0; x < 1000; x++) {
//     var board = document.createElement('div');
//     board.className = "square";
//
//     document.body.appendChild(board);
//
//   };
