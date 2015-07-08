
// When user wants to change the color to create pixel art.
// User should locate the input field.
// User types in a color.

// var setColor = document.getElementById("set-color");

// $(document).ready(function() {
// 	console.log("Page is ready.");

// 	// Click the submit button.
// 	$("form")[0].addEventListener("submit", function(event) {
// 		event.preventDefault(); // Prevet the trigger.

// 		// Change the brush box color that relates to the input value.
// 		var submitColor = $("#color-field").val();
// 		$(".brush").css("background", submitColor)
// 			console.log("Changed color in the brush box.");
// 	});

// 	// Create 20 divs of the "square" class and append them to the body
// 	for (var i = 0; i < 20; i++) {
// 		$("body").append($("<div class='square'/>"));
// 		// On append, use <div /> instead of </div> tag.

// 	}

// 	// Changes the color of that individual square to typed color.
	

// 	$(".square").mouseover(function() {
// 		var submitColor = $("#color-field").val();

// 		$(".square").css("background", submitColor)
// 	});

// });



$(document).ready(function() {
	console.log("Page is ready.");

	// Select the first element and add an evet listener to it.
	$("form")[0].addEventListener("submit", function(event) {
		// Prevet the trigger.
		event.preventDefault();
		// Add color value to the brush.
		$(".brush").css("background",$("#color-field").val());
			console.log("Changed color in the brush box.");

	});

	// Create 20 DIVs of the "square" class. 
	for (var i = 0; i < 20; i++) {
		// On the append, use <div /> instead of </div> tag.
		$("body").append($("<div class='square'/>"));
	};

	// Change the DIVs colors on hover.
	$(".square").mouseover(function() {
		// Reuse the #color-field value.
		$(this).css("background",$("#color-field").val());
			console.log("Individually changed each .square color value.");
	});

});