var button = document.querySelector("button");
var brushBox = document.querySelector(".brush");
var colorBox = document.querySelector("#color-field");
var square = document.querySelectorAll(".square");


function pixArt() {
//Make text input change the color of the brush box to the color specified
  event.preventDefault();
  colorBox.setAttribute("value", "");
  brushBox.style.background = colorBox.value;

//Add 20 <div> elements with the class "square"
  for(var i = 0; i < 20; i++) {
    newDiv = document.createElement("div");
    document.body.appendChild(newDiv);
    newDiv.className = "square";
  }
}

button.addEventListener( "click", pixArt );
