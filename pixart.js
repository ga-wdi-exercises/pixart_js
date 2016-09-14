// pixart.js

// Set Brush Color
function setColor() {
	$('.brush').css('background', ($('#color-field').val()));
}

$('#set-color').on('click', function(e) {
	e.preventDefault();
	setColor();
})

$('#set-color').keypress(function(e) {
	var key = e.which;
	if (key == 13) {
		setColor();
	}
})
