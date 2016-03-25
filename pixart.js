//color handling
var pBrush = document.querySelector(".brush");
var form = document.querySelector("form");
var newColor = document.querySelector("#color-field")

form.addEventListener("submit", function(event) {
  event.preventDefault();
  pBrush.style.backgroundColor = newColor.value;
});
