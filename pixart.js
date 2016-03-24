var button = document.querySelector("button");
var brushBox = document.querySelector(".brush");
var colorBox = document.querySelector("#color-field");
var square = document.querySelectorAll(".square");

//Add 20 <div> elements with the class "square" when page is loaded
window.onload = function() {
    for(var i = 0; i < 20; i++) {
      newDiv = document.createElement("div");
      document.body.appendChild(newDiv);
      newDiv.className = "square";
    }
};

function pixArt() {
//Make text input change the color of the brush box to the color specified
  event.preventDefault();
  colorBox.setAttribute("value", "");
  brushBox.style.background = colorBox.value;
}

button.addEventListener( "click", pixArt );
