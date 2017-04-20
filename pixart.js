// pixart.js

// Set Brush Color
function setColor(color) {
	updateSwatches();
	$('.brush').css('background', color);
}

// Click listener for Set Color
$('#set-color').on('click', function(e) {
	e.preventDefault();
	setColor($('#color-field').val());
})

// Enter key listener for Set Color
$('#set-color').keypress(function(e) {
	var key = e.which;
	if (key == 13) {
		setColor($('#color-field').val());
	}
})

// Create 20 .square divs
for (var i = 0; i < 8000; i++) {
	$('body').append('<div class="square"></div>');
}

// Click listener for .square
$('body .square').on('mouseover', function(e) {
	e.preventDefault();
	$(this).css('background', $('.brush').css('background'));
})

// Color Swatches
function updateSwatches() {
	$('.swatch').eq(2).css('background', $('.swatch').eq(1).css('background'));
	$('.swatch').eq(1).css('background', $('.swatch').eq(0).css('background'));
	$('.swatch').eq(0).css('background', $('.brush').css('background'));
}

// Click listener for Swatches
$('.swatch').on('click', function() {
	chooseSwatch($(this));
})

// Swatch logic
function chooseSwatch($swatch) {
	var temp = $('.brush').css('background');
	$('.brush').css('background', $swatch.css('background'));
	$swatch.css('background', temp);
}
