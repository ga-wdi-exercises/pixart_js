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

	// var div = document.createElement('div');
	// document.body.appendChild(div);

	$(document).ready(function(){
		for (var i=1; i<=20; i++){
			$('body').append('<div class="square">');
		}

		$(".square").on("click", function(){
			var color = $('#color-field').val();
			$(this).css("background-color", color + $(this).val());
			console.log("squares are clicked");
		});

	});
});


$('#activite_color').on('keyup', function() {
    $('.col-lg-1').css('background', '#' + $(this).val());
});
