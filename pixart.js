// Get the form so that we can prevent the submit action on it
var color_form = document.getElementById("form")
// Get the new color
var new_color = document.getElementById("color-field")
// Get the brush 
var brush = document.querySelector(".brush")
colorSwatches = ["#333", "#fff", "#000"];

// Draw swatches 
function createSwatches(){
  for (var i = 0; i < colorSwatches.length; i++) {
    var swatch = document.createElement("div");
    swatch.style.height = "100px";
    swatch.style.width = "100px";
    swatch.className = "recent-swatch"
    swatch.style.display = "inline-block";
    swatch.style.marginBottom = "30px";
    swatch.style.marginLeft = "30px";
    swatch.style.marginRight = "30px";
    swatch.style.backgroundColor = colorSwatches[i];
    document.querySelector(".controls").appendChild(swatch);
  };
}

createSwatches();

// Change the color 
function changeColor(evt){
  // Prevent the default behavior of whatever event is passed to changeColor
  evt.preventDefault();
  // Replace the brush's color with a new color
  brush.style.backgroundColor = new_color.value;
  colorSwatches.pop();
  colorSwatches.unshift(new_color.value);
  swatches = document.querySelectorAll(".recent-swatch");
  for (var i = 0; i < swatches.length; i++){
    swatches[i].style.backgroundColor = colorSwatches[i]; 
  }
}

// Take the form and call changeColor when the form is submitted 
// submit.preventDefault() prevents the form from being submitted 
color_form.addEventListener('submit', changeColor);

function changeBySwatch(evt){
  document.getElementById("color-field").value = this.style.backgroundColor
}

swatches = document.querySelectorAll(".recent-swatch");
for (var i = 0; i < swatches.length; i++) {
  swatches[i].addEventListener('click', changeBySwatch);
  swatches[i].addEventListener('click', changeColor);
};


function createSquares(){
  i = 0;
  while (i < 8000){
    var square = document.createElement("div");
    square.className = "square";
    document.body.appendChild(square);
    i++ 
  }
}

createSquares();

var squares = document.querySelectorAll(".square");

function changeSquare(evt){
  this.style.backgroundColor = new_color.value;
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('mouseover', changeSquare);
};
