
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
  newDiv = document.createElement('div');
  newDiv.className = "square";
  $("body").append(newDiv);
  newDiv.addEventListener("mouseover", function() {
    this.style.backgroundColor = userInput.value;
  })
}

for (var i = 0; i < 8000; i++){
  appendSquare()
}
