var colorButton = document.getElementById("set-color");
var colorField = document.getElementById("color-field");
var brush = document.querySelector(".brush");

colorButton.addEventListener("click", function(event){
  event.preventDefault();
  brush.style.background = colorField.value
});
