var brushBox = document.getElementsByClassName("brush")[0];
var colorField = document.getElementById("color-field");
var colorBtn = document.getElementById("set-color");
var numPxls = 8000;
var numPalettes = 3;

createPalette();
createGrid();


colorField.addEventListener("keypress", checkKey);
colorBtn.addEventListener("click",changeBrshColor);

// Event functions.
//
// Keyboard event, look for enter key.
function checkKey(event){
  if(event.keyCode == 13){
    changeColor(event);
  }
}

// Change color of brush.
function changeBrshColor(event){
  event.preventDefault();
  brushBox.style = "background-color: " + colorField.value; +";";
  colorField.value = "";
}

// Change color of a pixel.
function changeColor(event){
  var color = window.getComputedStyle(brushBox).backgroundColor;
  event.target.style = "background-color: " + color + ";";
}

 //
function updatePalette(event){
  palettes = document.getElementsByClassName("palette");
  for (var i = palettes.length - 1; i > 0; i++){

  }

}


// Functions that create the needed functionality on page.
//
// Creates pixel grid.
function createGrid(){
  var div;
  for (var i = 0; i < numPxls; i++){
    div = document.createElement('div');
    div.className = "square";
    document.body.appendChild(div);
    div.addEventListener("mouseover", changeColor);
  }
}

// Create previously used color palettes.
function createPalette(){
  var div;
  for (var i = 0; i < numPalettes; i++){
    div = document.createElement('div');
    div.className = "palette";
    document.body.appendChild(div);
    div.addEventListener("click", updatePalette);
  }
}
