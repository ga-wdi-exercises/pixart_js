$("#set-color").click(function (e){ 
	e.preventDefault();
	var color = $("#color-field").val();
	$(".brush").css("background-color", color);
	$("input").val('');
});

for(i = 0; i < 20; i++) {
	$("body").append("<div class = 'square'></div>");
}