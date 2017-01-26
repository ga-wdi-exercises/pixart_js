$("button").on("click", function() {
	var color = $("input").val();
	event.preventDefault();
	$(".brush").css("background-color", color)
})