
// [x] target brush and create function to change background color
// [x] capture user input and deliver to changeBrushColor, listen for 'set color' click
// [x] changeBrushColor executes upon hitting enter key

var brush = document.querySelector(".brush")
var userInput = document.getElementById('color-field')
var searchButton = document.querySelector("#set-color")

searchButton.addEventListener("click", changeBrushColor);

function changeBrushColor() {
  brush.style.backgroundColor = userInput.value;
  event.preventDefault()
}

userInput.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
    }
});

function appendSquare() {
  newDiv = document.createElement("DIV");
  squareDiv = $(newDiv).addClass("square");
  $("body").append(squareDiv);
document.body.addEventListener("click", changeSquareColor );
}

for (var i = 0; i < 20; i++){
  appendSquare()
}

var addsquares = document.querySelectorAll(".square")
document.body.addEventListener("click", changeSquareColor );

  function changeSquareColor() {
    addsquares.style.backgroundColor = "green";
    event.preventDefault()
  }
