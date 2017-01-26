$("button").on("click", function() {
	var newColor = $("input").val();
	event.preventDefault();
	$(".brush").css("background-color", newColor)
})