//set variables
var setColor = document.getElementById("set-color");
var brush = document.querySelector(".brush");
var colorField = document.getElementById("color-field");
var newColor = document.getElementById("form");
var color = "#E7E5DB";

//add event listener and call on function when clicked
setColor.addEventListener("click", changeBackgroundColor);

//change box color to color typed into colorField
function changeBackgroundColor(event) {
  brush.style.backgroundColor = colorField.value;
  event.preventDefault();
}
