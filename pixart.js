function changeBrushColor(){
  var color = document.getElementById("color-field").value;
  event.preventDefault();
  document.querySelector("div.brush").style.background = color;
};

function changeSquareColor(){
  var color = document.getElementById("color-field").value;
  this.style.background = color;
  var self = this;
  setTimeout(function buddhaBoard(){
    self.style.background = "#E7E5DB"
  }, 8000)
}

document.querySelector("#set-color").addEventListener("click" || "compositionend", changeBrushColor);

for (i=0; i<=8000; i++){
var newDiv = document.createElement("div");
newDiv.className = 'square';
document.body.appendChild(newDiv);
newDiv.addEventListener("mouseover", changeSquareColor)
}
