var button = document.querySelector("#set-color");
var brush = document.querySelector(".brush");
var colorField = document.querySelector("#color-field");


setColor.addEventListener("click", changeColor);

function changeColor(event){
      event.preventDefault();
      brush.style.backgroundcolor = color;
}
