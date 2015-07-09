var color;

$("#set-color").click(function (e){ 
	e.preventDefault();
	var color = $("#color-field").val();
	$(".brush").css("background-color", color);
	$("input").val('');
});

for(i = 0; i < 8000; i++) {
	$("body").append("<div class = 'square'></div>");
};

$(".square").mouseover(function() {
	color = $(".brush").css("background-color");
	$(this).css("background-color", color);
	console.log(this);
});