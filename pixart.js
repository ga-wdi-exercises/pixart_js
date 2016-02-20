
// target brush and create function to change background color
var brush = document.querySelector(".brush")
var userInput = document.getElementById('color-field')
var searchButton = document.querySelector("#set-color")



function changeBrushColor() {
  brush.style.backgroundColor = userInput.value;
  event.preventDefault()
}

searchButton.addEventListener("click", changeBrushColor);

// capture user input and deliver to changeBrushColor, listen for 'set color' click

//
// console.log(document.getElementById('color-field').value)
//
// color = userInput.value

//searchButton.addEventListener("click", setColor)

// function setColor() {
//   var userColor = document.getElementById('color-field').value
// }

//var inputColor =
