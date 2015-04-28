// When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field. (**Hint:** You will need to use `event.preventDefault()` somewhere in your code.)
var form = document.querySelector("form")
var button = document.querySelector("#set-color")
var brush = document.querySelector(".brush")
var colorField = document.querySelector("#color-field")

form.addEventListener("submit", function( event ){
    event.preventDefault();

    brush.style.backgroundColor = colorField.value
})
