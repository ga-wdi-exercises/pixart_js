var setColorButton = document.querySelector("#set-color");
var inputColor = document.querySelector("#color-field");
var colorField = document.querySelector("#color-field");
var brush = document.querySelector(".brush");
var body = document.querySelector("body");



function setColor(event) {
  event.preventDefault();
  brush.style.backgroundColor = colorField.value;
}

function pixArt() {
  for (var i = 0; i < 8000; i ++) {
    var div = document.createElement("div");
    div.classList.add("square");
    div.addEventListener("mouseover", paint);
    body.appendChild(div);
  }
}

function paint() {
  this.style.backgroundColor = brush.style.backgroundColor;
}





setColorButton.addEventListener("click", setColor);
