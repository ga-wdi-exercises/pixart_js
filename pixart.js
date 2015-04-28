var form = document.getElementById("form");
var brush = document.querySelector("div.controls div.brush");
var colorField = document.getElementById("color-field");

form.addEventListener('submit', changeBrush);

function changeBrush(event){
    event.preventDefault();
    brush.style.backgroundColor = colorField.value;
}
