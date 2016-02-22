var button = document.querySelector("button");
var input = document.querySelector("input");
var color_field = document.querySelector("#color-field");
var brush = document.querySelector(".brush");



button.addEventListener("click", grabInputInfo);

//I want to pull information from input.
function grabInputInfo(){
  event.preventDefault();
  brush.style.background = color_field.value;
}
