$(document).ready(function () {
	var button = $('#set-color');

	button.on("click",function(e){
		e.preventDefault();
		var colorVal = $('#color-field').val();

		console.log(colorVal)

		$('.brush').css("background", colorVal);
	})
})
