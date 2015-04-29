var form = document.querySelector("#form");
var colorPalette = document.querySelector(".brush");
var colorField = document.querySelector("#color-field");


form.addEventListener("submit", function(formEvent){     // ("event being listened for", [action to take when it occurs, in the form of a function])
	formEvent.preventDefault();							// Prevents any default actions that would normally be taken by the event.
	colorPalette.style.backgroundColor = colorField.value;  // tested on page for click and then 'enter' to submit color
})

// Using JavaScript, create 20 divs of the "square" class and append them to the body.

// for loop = (3 parts) using any variable [think of "i = iterator"] --> (1) i=0 ["starting point"]; 
// (2) i < 20 [#20 = # of times to iterate, NOT like the "upper point of a range"... aka "keep iterating as long as the number of iterations is less than 20; or really, "as long as 'this middle condition' is < 20"]; and
// (3) 'i++' instructs HOW the iterator should increment with each iteration--> ++ means "go up by 1 each time" (opposite is '--' insofar as "syntactic sugar" goes)

for (i = 0; i < 20; i++) { 				// a for loop needs curly braces too
	var pixelSquare = document.createElement("div");
	pixelSquare.className = "square";		// method for giving the style of an existing Class to something new.  // new variable "square" is a new created element within the DOM (a div) and we're giving it a Class (CSS) attribute of "square".
	pixelSquare.addEventListener("click", function(){      // the EventListener is "listening" for the CLICK event!  // Second item in parentheses = function which creates the action to follow the event (the click)
		this.style.backgroundColor = colorField.value;		// 'this' replaces pixelSquare here because as each square is subsequently named "pixelSquare" (1 for each iteration, replacing the former square with variable name pixelSquare from the previous iteration), after the 'for' loop ends only the last square will have name "pixelSquare" -- so only that one would get changed to 'green' --> 'this' solves the problem by telling the element to refer to itSELF rather than an external veriable. 
	});
	document.body.appendChild(pixelSquare);   // appends pixelSquare 20 times to the doc. body
}     											

// Add functionality so that when I click on each "square", it changes the color of that individual square to "green"

// Modify your code so that when I click on each "square", it changes to the color I set using my input instead of "green" every time.






// BELOW = UP THROUGH STEP 4 --> Comments!!
//////////////
// for (i = 0; i < 20; i++) { 				// a for loop needs curly braces too
// 	var pixelSquare = document.createElement("div");
// 	pixelSquare.className = "square";		// method for giving the style of an existing Class to something new.  // new variable "square" is a new created element within the DOM (a div) and we're giving it a Class (CSS) attribute of "square".
// 	pixelSquare.addEventListener("click", function(){      // the EventListener is "listening" for the CLICK event!  // Second item in parentheses = function which creates the action to follow the event (the click)
// 		this.style.backgroundColor = "green";		// 'this' replaces pixelSquare here because as each square is subsequently named "pixelSquare" (1 for each iteration, replacing the former square with variable name pixelSquare from the previous iteration), after the 'for' loop ends only the last square will have name "pixelSquare" -- so only that one would get changed to 'green' --> 'this' solves the problem by telling the element to refer to itSELF rather than an external veriable. 
// 	});
// 	document.body.appendChild(pixelSquare);   // appends pixelSquare 20 times to the doc. body
// }     											
///////////////
// Add functionality so that when I click on each "square", it changes the color of that individual square to "green"
