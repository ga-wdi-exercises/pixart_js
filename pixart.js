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

		$("div").on("click", function(){
			$(this).css("background-color", "green");
			console.log("squares are clicked");
		});

	});
});
// var txt3 = document.createElement("p");  // Create with DOM
//     txt3.innerHTML = "Text.";
