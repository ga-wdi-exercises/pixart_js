$("#set-color").click(function (e){ 
	e.preventDefault();
	var color = $("#color-field").val();
	console.log(color)
	$(".brush").css("background-color", color)
})