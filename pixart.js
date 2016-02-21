var button = document.querySelector("#set-color");
var colorText = document.querySelector("#color-field");
var colorSquare = document.querySelector(".brush");
var color= "#1B4370";

playPixart();

function playPixart() {
  button.addEventListener("click", setColor);
}

function setColor(event) {
  event.preventDefault();
  color = colorText.value;
  colorSquare.style.backgroundColor = color;
}


//Simple event to change square's color to green when buttoned is clicked.
// button.addEventListener("click", function(event) {
//   event.preventDefault();
//   colorSquare.style.backgroundColor = "green";
// });
