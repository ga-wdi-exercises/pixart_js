var colorButton = document.querySelector("#set-color");
var colorSquare = document.querySelector(".brush");
var colorText = document.querySelector("#color-field");

colorButton.addEventListener("click", function(event) {
  event.preventDefault();
  colorSquare.style.backgroundColor = "red";
});
