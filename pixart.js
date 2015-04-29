var colorField;
var chosenColor;

var setBoxColor = function(event){
  event.preventDefault();  //if don't have this page is refreshed
  colorField = document.getElementById("color-field")
  chosenColor = colorField.value
  var brush = document.querySelector(".brush")
  brush.style.backgroundColor = chosenColor
}

//want backgorund color of box
var setColorButton = document.getElementById("set-color")
setColorButton.addEventListener("click", setBoxColor);


// set up grid and mouseover eventListener for boxes

for(var i = 0; i < 8000; i++){
  var square = document.createElement("div");
  square.className = "square";
  document.body.appendChild(square);
  square.addEventListener("mouseover", function(event) {
    console.log("foo")
    this.style.backgroundColor = chosenColor;
  } )
}


// Paint a picture!


// Bonus
//
// Add a color swatch. You should have 3 boxes with the most recent 3 colors used. When you click on each of those boxes, it should set the current brush color back to that color.
