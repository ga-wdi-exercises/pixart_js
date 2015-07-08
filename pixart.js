
// When user wants to change the color to create pixel art.
// User should locate the input field.
// User types in a color.

var setColor = document.getElementById("set-color");

$(document).ready(function() {

	// Click the submit button.
	$("form")[0].addEventListener("submit", function(event) {
		event.preventDefault(); // Prevet the trigger.

		// Change the brush box color that relates to the input value.
		var submitColor = $("#color-field").val();
		$(".brush").css("background", submitColor)
			console.log("Changed color in the brush box.");
	})

	// Create 20 divs of the "square" class and append them to the body
	for (var i = 0; i < 20; i++) {
		$("body").append($("<div class='square'/>"));
		// On append, use <div /> instead of </div> tag.
	}
})


