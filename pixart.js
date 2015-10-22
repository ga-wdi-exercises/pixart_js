$(document).ready(function() {

	// Commit 1
	// When I click the "Set Color" button, it should change the color of the "brush" box to the color 
	// I specify in the input field. (Hint: You will need to use event.preventDefault() 
	// Use jQuery to select the element, and addEventListener to handle clicks
	// $("body")[0].addEventListener...

	var click = 0;

	// Bonus
	// Add a color swatch. You should have 3 boxes with the most recent 3 colors used. .
	// When you click on each of those boxes, it should set the current brush color back to that color

	$("div.controls").append("<div class='brush'></div><div class='brush'></div>");
	$("div.brush").css("display", "inline-block");
	$("div.brush").eq(1).css("margin-right", "4px"); 	// The first brush always had a white space betwee it and the next one, even though I couldn't find anything in the CSS ...

	var colorInput;

	$("button#set-color").on("click", function setColor(event) {	
		event.preventDefault();
		click ++;
		colorInput = $("input#color-field").val();
		$("input#color-field").val("");
		if (click < 4) {
			if (click % 3 === 1) {
				$("div.brush").eq(0).css("background", colorInput);
			} else if (click % 3 === 2) {
				$("div.brush").eq(1).css("background", $("div.brush").eq(0).css("background"));
				$("div.brush").eq(0).css("background", colorInput);
			} else {
				$("div.brush").eq(2).css("background", $("div.brush").eq(1).css("background"));
				$("div.brush").eq(1).css("background", $("div.brush").eq(0).css("background"));
				$("div.brush").eq(0).css("background", colorInput);
			}
		} else {
			$("div.brush").eq(2).css("background", $("div.brush").eq(1).css("background"));
			$("div.brush").eq(1).css("background", $("div.brush").eq(0).css("background"));
			$("div.brush").eq(0).css("background", colorInput);
		}
		$("div.brush").on("click", function switchColor() {
			colorInput = $(this).css("background");
			return colorInput;
		})
		$("div.square").on("mouseover", function setColor() {	
			$(this).css("background", colorInput);
		})
		console.log(colorInput);	// most recent add
		return colorInput;
	})


$("div.brush").on("click", function switchColor() {
	colorInput = $(this).css("background");
	$("div.square").on("mouseover", function setColor() {	
		$(this).css("background", colorInput);
	})
})	




	// Commit 2
	// The same thing should happen when I press the enter key from inside the input field

	// $("input#color-field").keydown(function(event) {
	// 	if (event.code === 13) {
	// 		setColor(event);
	// 	}
	// })

	// Commit 3
	// Create 20 divs of the "square" class and append them to the body. Hint: use .append()

	$("body").append("<div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div>");

	// Commit 4
	// Add functionality so that when I click on each "square", it changes the color of that individual 
	// square to "green" Hint: either add the event listener while creating the squares, or listen 
	// for events on the body element

	// $("div.square").on("click", function turnGreen() {		// This worked though? I think
	// 	$(this).css("background", "green");
	// })

	// Commit 5
	// Modify your code so that when I click on each "square", it changes to the color I set using my 
	// input instead of "green" every time.

	// $("div.square").on("click", function setColor(event) {	
	// 	$(this).css("background", $("input#color-field").val());
	// })

	// Commit 6
	// Modify the CSS so that the "square" class has a height and width of 10px and a margin of 0.
	// Modify your code so that you are creating 8000 divs instead of 20.
	// Change the event that changes your box colors from 'click' to 'mouseover'
	// Paint a picture!

	$("div.square").css("height", "10px").css("width", "10px").css("margin", "0");

	// while ( $("div.square").length < 8000) {
	// 	$("body").append("<div class='square'></div>");
	// }


	// $("div.brush").each(function(event) {
	// 	on("click", function(event) {
	//  		console.log($(this));
 
})