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

	for (var i=1; i<=8000; i++){
		$('body').append('<div class="square">');
	}

	$(".square").on("mouseover", function(){
		var color = $('#color-field').val();
			$(this).css("background-color", color);
			console.log("squares are clicked");
		});

});
