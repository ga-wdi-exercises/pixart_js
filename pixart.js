$("button").on("click", function() {
	color = $("input").val();
	event.preventDefault();
	$(".brush").css("background-color", color)
})

$("document").ready(function () {
	for (var i = 0; i < 1000; i++) {

		$("body").append("<div class='square'></div>");

		$(".square").on("mouseover", function () {
			$(this).css("background-color", color)
		})
	}
})

