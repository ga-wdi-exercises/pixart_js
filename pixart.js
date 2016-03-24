var setColorButton = document.querySelector("#set-color");
var brushDiv = document.querySelector("div.brush");

function changeColor(){
  var color = document.getElementById("color-field").value;
  event.preventDefault();
  brushDiv.style.background = color
};

setColorButton.addEventListener("click", changeColor);
setColorButton.addEventListener("compositionend", changeColor);

for (i=0; i<=20; i++){
var h1 = document.querySelector("h1")
var newDiv = document.createElement("div");
newDiv.className = 'square';
newDiv.innerHTML = "";
document.body.appendChild(newDiv)}
