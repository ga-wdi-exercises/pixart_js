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
	for (var i = 0; i < 8000; i++) {
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