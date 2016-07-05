$(document).ready(function(){
	var set_color = $("#set-color");

	set_color.click(function(e) {
		e.preventDefault();
		$("body").css("background", ($('input#color-field').val()));
 	});

});