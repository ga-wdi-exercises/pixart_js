// pixart.js

$('#set-color').on('click', function(e) {
	e.preventDefault();
	$('.brush').css('background', ($('#color-field').val()));
})
