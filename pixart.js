var brush = document.querySelector(".brush")
var button = document.querySelector("#set-color");

button.addEventListener( "click", changeColor);


function changeColor(event) {
  event.preventDefault()
  brush.style.background = "red"

};
