$(document).ready(function () {
	var div = "<div class='square'></div>"

	var button = $('#set-color');
	//create div's
	for (var i = 0; i < 21; i++) {
		$('body').append(div)
	}

	//changes color to input color value
	button.on("click",function(e){
		e.preventDefault();
		var aColor = colorVal()
		$('.brush').css("background", aColor);
	})

	//div will change color when clicked
	$('.square').on("click",function(){
		var aColor = colorVal();
		$(this).css("background", aColor)
	})

	//finds the value of input field
	function colorVal() {
		return $('#color-field').val();
	}
})
