$(document).ready(function(){
	var set_color = $("#set-color");

	set_color.click(function(e) {
		e.preventDefault();
		$("body").css("background", ($('input#color-field').val()));
 	})

	for (var i = 0; i < 20; i++) {
		$("body").append("<div class='square'></div>");
	}

	$(".square").click(function(e) {
		e.preventDefault();
		$(this).css("background", "green");
	})

});