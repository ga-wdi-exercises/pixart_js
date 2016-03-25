var form = document.querySelector("#form")
var brush = document.querySelector(".brush")
var input = document.querySelector("#color-field")
var button = document.querySelector("#set-color");


form.addEventListener('submit', function(event){
  event.preventDefault();
  brush.style.backgroundColor = input.value;
});

// function changeColor(event) {
//   event.preventDefault()
//   if ( == "red") {
//     brush.style.background = "red"
//   }
//   else if (input == "white") {
//     brush.style.background = "white"
//   }
//   else if (input == "black") {
//     brush.style.background = "black"
//   }
// };
