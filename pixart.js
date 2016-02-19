var button = document.querySelector("#set-color");

var color_field = document.querySelector("#color-field");

var brush = document.querySelector(".brush");

button.addEventListener("click", function()
{
  event.preventDefault();
  brush.style.background = color_field.value;
});
