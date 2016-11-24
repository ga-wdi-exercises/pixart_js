$(function(){
	console.log('js works');

	$('button').click(function(e) {
	    e.preventDefault();

	$('button').on('click', function(){
		console.log(' clicked on color-field');

		var color = $('#color-field').val();
		$('.brush').css("background-color", color);


		
		});
	});
});
