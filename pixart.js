var brush = document.querySelector(".brush");
var button = document.querySelector("#set-color");
var form = document.querySelector("#form");
var body = document.querySelector("body");
var div;

function changeBrushButton(event) {
  event.preventDefault();
  var choice = $("#color-field").val();
  brush.style.backgroundColor = choice;
}

function changeBrushKey(event) {
  if (13 == event.keyCode) {
    var choice = $("#color-field").val();
    brush.style.backgroundColor = choice;
  }
}

function createSquares(num) {
  for (i = 0; i <= num; i++) {
    div = document.createElement("div");
    document.body.appendChild(div);
    div.className = "square";
    div.addEventListener("click", changeColor);
  }
}

function changeColor(event) {
    event.target.style.backgroundColor = "green";
}

button.addEventListener("click", changeBrushButton);
form.addEventListener("keydown", changeBrushKey);
createSquares(20);
