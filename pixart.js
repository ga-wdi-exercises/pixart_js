var setColorButton = document.querySelector("#set-color");
var brushDiv = document.querySelector("div.brush");

function changeBrushColor(){
  var color = document.getElementById("color-field").value;
  event.preventDefault();
  brushDiv.style.background = color;
  console.log("pizza")
};

setColorButton.addEventListener("click" || "compositionend", changeBrushColor);

function changeSquareColor(){
  var color = document.getElementById("color-field").value;
  event.preventDefault();
  this.style.background = color;
};

for (i=0; i<=8000; i++){
var newDiv = document.createElement("div");
newDiv.className = 'square';
newDiv.innerHTML = "";
document.body.appendChild(newDiv);
newDiv.addEventListener("mouseover", changeSquareColor)
}
