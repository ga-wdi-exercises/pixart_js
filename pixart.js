$(document).ready(function(){
	var set_color = $("#set-color");
	var swatch = [];

	set_color.click(function(e) {
		e.preventDefault();
		$(".brush").css("background", ($('input#color-field').val()));

 	})

	function set(color) {
		if (swatch.length > 2) {
			var trash = swatch.pop();
		}
		swatch.unshift(color);
		$("#0").css("background", swatch[0]);
		$("#1").css("background", swatch[1]);
		$("#2").css("background", swatch[2]);
	}

	for (var i = 0; i < 8000; i++) {
		$("body").append("<div class='square'></div>");
	}

	$(".square").mouseover(function(e) {
		e.preventDefault();
		$(this).css("background", ($('input#color-field').val()));
	})

	$(".square").click(function() {
  		set_color = $(this).css("background");
  		set(set_color);
  		$(".brush").css("background", set_color);
  		$(".brush").css("background", ($('input#color-field').val(set_color)));
	});
	$(".pix").click(function() {
  		set_color = $(this).css("background");
  		set(set_color);
  		$(".brush").css("background", set_color);
  		$(".brush").css("background", ($('input#color-field').val(set_color)));
	});



});