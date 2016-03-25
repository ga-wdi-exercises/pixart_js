var button = document.querySelector("button");
var brushBox = document.querySelector(".brush");
var colorBox = document.querySelector("#color-field");
var square = document.querySelectorAll(".square");
var body = document.body;
var pixel = 20;

//Add 20 <div> elements with the class "square" when page is loaded
function addDivs() {
    for(var i = 0; i < 8000; i++) {
      var newDiv = document.createElement("div");
      var child = document.body.appendChild(newDiv);
      newDiv.className = "square";
    }
}

function paintDivs() {
  var color = colorBox.value;
  document.querySelectorAll(".square")[pixel].style.background = color;
}


//Make text input change the color of the brush box to the color specified
function brushColor() {
  event.preventDefault();
  colorBox.setAttribute("value", "");
  brushBox.style.background = colorBox.value;
  paintColor = colorBox.value;
  return paintColor;
}


window.addEventListener("mouseover", paintDivs );
window.addEventListener( "load", addDivs );
button.addEventListener( "click", brushColor );
