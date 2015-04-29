
// * When I click the "Set Color" button, it should change the color of the "brush"
// box to the color I specify in the input field. (**Hint:** You will need to use `event.preventDefault()` somewhere in your code.)



var form = document.getElementById("form")
var brush = document.querySelector(".brush")
var colorField = document.querySelector("#color-field")


form.addEventListener("submit", function(event){
  event.preventDefault()
  brush.style.backgroundColor = colorField.value
})

/* Using JavaScript, create 20 divs of the "square" class and append them to the body*/
var square = document.querySelector(".square")

var div = document.createElement("div")
div.appendChild( square )
document.querySelector( "div" ).appendChild( div )
