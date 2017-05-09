$(document).ready(function () {
	var div = "<div class='square'></div>"
	var button = $('#set-color');

	for (var i = 0; i < 21; i++) {
		$('body').append(div)
	}
	$('.square').on("click",function(){
		// console.log(this)
		$(this).css("background","green")
	})

	button.on("click",function(e){
		e.preventDefault();
		var colorVal = $('#color-field').val();

		console.log(colorVal)

		$('.brush').css("background", colorVal);
	})



})
