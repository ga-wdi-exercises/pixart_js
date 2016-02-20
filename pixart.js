
// [x] target brush and create function to change background color
// [x] capture user input and deliver to changeBrushColor, listen for 'set color' click
// [] changeBrushColor executes upon hitting enter key

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
    if (key === 13) { // 13 is enter
      // code for enter
    }
});
