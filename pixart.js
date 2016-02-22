var brushBox = document.getElementsByClassName("brush")[0];
var colorField = document.getElementById("color-field");
var colorBtn = document.getElementById("set-color");
var numPxls = 20;

createGrid();

colorField.addEventListener("keypress", checkKey);
colorBtn.addEventListener("click",changeBrshColor);

function checkKey(event){
  if(event.keyCode == 13){
    changeColor(event);
  }
}

function changeBrshColor(event){
  event.preventDefault();
  brushBox.style = "background-color: " + colorField.value; +";";
  colorField.value = "";
}

function createGrid(){
  var div;
  for (var i = 0; i < numPxls; i++){
    div = document.createElement('div');
    div.className = "square";
    document.body.appendChild(div);
    div.addEventListener("click", changeColor);
  }
}

function changeColor(event){
  var color = window.getComputedStyle(brushBox).backgroundColor;
  event.target.style = "background-color: " + color + ";";
}
