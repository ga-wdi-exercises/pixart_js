// Previous commit has commented-out code from first 6 steps, this is just the simplified code w/ comments

$(document).ready(function() {

	var click = 0;										// click counter (how many times you submitted a new color)
	var colorInput;

	$("div.controls").append("<div class='brush'></div><div class='brush'></div>"); // adds 2 more color swatches
	$("div.brush").css("display", "inline-block");		// displays color swatches next to each other
	$("div.brush").eq(1).css("margin-right", "4px"); 	// The first brush always had a white space between it and the next one???? I don't know why

	$("button#set-color").on("click", function setColor(event) {	
		event.preventDefault();
		click ++;										// click counter increases	
		colorInput = $("input#color-field").val(); 		// stores color you input

		
		$("input#color-field").val(""); 				// clears input box after you set the color
		if (click === 1) {								// on first click ...
			$("div.brush").eq(0).css("background", colorInput);	// your input goes in first brush box
		} else if (click === 2) { 						// on second click ...
			$("div.brush").eq(1).css("background", $("div.brush").eq(0).css("background")); // color of brush box #1 assigned to brush box #2
			$("div.brush").eq(0).css("background", colorInput);	// color of brush box #1 is what you input
		} else { 										// on third and any subsequent clicks ...
			$("div.brush").eq(2).css("background", $("div.brush").eq(1).css("background")); // color of brush box #2 pushed to brush box #3
			$("div.brush").eq(1).css("background", $("div.brush").eq(0).css("background")); // color of brush box #1 pushed to brush box #2
			$("div.brush").eq(0).css("background", colorInput); // color of brush box #1 is what you input
		}

		$("div.brush").on("click", function switchColor() { // if you click on one of your brush boxes
			colorInput = $(this).css("background"); 	// its background is now your brush
			return colorInput;							// passes that color out of function
		})

		$("div.square").on("mouseover", function setColor() { // when you mouseover a square
			$(this).css("background", colorInput);			// its background is assigned your current brush color
		})
	})

	$("div.square").css("height", "10px").css("width", "10px").css("margin", "0"); // creates square divs to draw on

	while ( $("div.square").length < 8000) {			// appends square divs til there are 8000
		$("body").append("<div class='square'></div>");
	}

})