var form = document.querySelector("#form");
var colorPalette = document.querySelector(".brush");
var colorField = document.querySelector("#color-field");


form.addEventListener("submit", function(formEvent){     // ("event being listened for", [action to take when it occurs, in the form of a function])
	formEvent.preventDefault();							// Prevents any default actions that would normally be taken by the event.
	colorPalette.style.backgroundColor = colorField.value;  // tested on page for click and then 'enter' to submit color
})

