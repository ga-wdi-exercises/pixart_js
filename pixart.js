// pixart.js

// Set Brush Color
function setColor() {
	$('.brush').css('background', ($('#color-field').val()));
}

// Click listener for Set Color
$('#set-color').on('click', function(e) {
	e.preventDefault();
	setColor();
})

// Enter key listener for Set Color
$('#set-color').keypress(function(e) {
	var key = e.which;
	if (key == 13) {
		setColor();
	}
})

// Create 20 .square divs
for (var i = 0; i < 20; i++) {
	$('body').append('<div class="square"></div>');
}

// Click listener for .square
$('body .square').on('click', function(e) {
	e.preventDefault();
	$(this).css('background', 'green');
})
