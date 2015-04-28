// Get the form so that we can prevent the submit action on it
var color_form = document.getElementById("form")
// Get the new color
var new_color = document.getElementById("color-field")
// Get the brush 
var brush = document.querySelector(".brush")

// Change the color 
function changeColor(evt){
  // Prevent the default behavior of whatever event is passed to changeColor
  evt.preventDefault();
  // Replace the brush's color with a new color
  brush.style.backgroundColor = new_color.value;
}

// Take the form and call changeColor when the form is submitted 
// submit.preventDefault() prevents the form from being submitted 
color_form.addEventListener('submit', changeColor);


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



