var form = document.querySelector("#form");
var colorPalette = document.querySelector(".brush");
var colorField = document.querySelector("#color-field");


form.addEventListener("submit", function(formEvent){     // ("event being listened for", [action to take when it occurs, in the form of a function])
	formEvent.preventDefault();							// Prevents any default actions that would normally be taken by the event.
	colorPalette.style.backgroundColor = colorField.value;  // tested on page for click and then 'enter' to submit color
})

// Using JavaScript, create 20 divs of the "square" class and append them to the body.

for (i = 0; i < 20; i++) { 				// a for loop needs curly braces too
	var pixelSquare = document.createElement("div");
	pixelSquare.className = "square";		// method for giving the style of an existing Class to something new.  // new variable "square" is a new created element within the DOM (a div) and we're giving it a Class (CSS) attribute of "square".
	document.body.appendChild(pixelSquare);   // appends pixelSquare 20 times to the doc. body
}     
// for loop = (3 parts) using any variable [think of "i = iterator"] --> (1) i=0 ["starting point"]; 
// (2) i < 20 [#20 = # of times to iterate, NOT like the "upper point of a range"... aka "keep iterating as long as the number of iterations is less than 20; or really, "as long as 'this middle condition' is < 20"]; and
// (3) 'i++' instructs HOW the iterator should increment with each iteration--> ++ means "go up by 1 each time" (opposite is '--' insofar as "syntactic sugar" goes)

