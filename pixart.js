var colorButton = document.getElementById("set-color");
var colorField = document.getElementById("color-field");
var brush = document.querySelector(".brush");

colorButton.addEventListener("click", function(event){
  event.preventDefault();
  brush.style.background = colorField.value;
});

colorField.addEventListener("keypress", function(event){
  if (event.keyCode === 13){
    brush.style.background = colorField.value;
  }
});
