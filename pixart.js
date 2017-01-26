$("button").on("click", function() {
	var newColor = $("input").val();
	event.preventDefault();
	$(".brush").css("background-color", newColor)
})

$("document").ready(function () {
	for (var i = 0; i < 20; i++) {
		$("body").append("<div class='square'></div>")
	}
})

// function newBoxes() {
// 	$(".square").append("<div></div>");
// }

// $(window).on( "load", newBoxes );
