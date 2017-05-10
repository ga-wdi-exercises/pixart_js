$(document).ready(function () {
	var div = "<div class='square'></div>";
	var prev = $('.prev')
	var last = $('.last')
	var button = $('#set-color');
	var brush = $('.brush');
	var currentColor;
	//create div's
	for (var i = 0; i < 8001; i++) {
		$('body').append(div)
	}

	//changes color to input color value
	button.on("click",function(e){
		e.preventDefault();

		//send colors down the line
		var lColor = $('.prev').css("background");
		var pColor = $('.current').css("background");
		last.css("background", lColor)
		prev.css("background", pColor)

		//find color value
		var aColor = colorVal()
		currentColor = colorVal()
		//set current
		$('.current').css("background", aColor);

	})

	//div will change color on mouse over
	$('.square').on("mouseover",function(){
		var aColor = currentColor
		$(this).css("background", aColor)
	})
	brush.on("click",function(){
		currentColor = $(this).css("background")
	})

	//finds the value of input field
	function colorVal() {
		return $('#color-field').val();
	}
})
