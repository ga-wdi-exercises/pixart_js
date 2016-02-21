var typedColor = document.querySelector("#color-field");
var previewBox = document.querySelector(".brush");
var btn = document.getElementById("set-color");

function boxColor(){
  previewBox.style.backgroundColor = typedColor.value;
  event.preventDefault();
}

btn.addEventListener("click",boxColor);
