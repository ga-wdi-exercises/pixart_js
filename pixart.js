var typedColor = document.querySelector("#color-field");
var previewBox = document.querySelector(".brush");
var form = document.querySelector("#set-color");

function boxColor(){
  previewBox.style.backgroundColor = typedColor.value;
  event.preventDefault();
}

form.addEventListener("click",boxColor);
