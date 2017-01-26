$(document).ready(function(){


var color = $("#color-field").val();


function changeColor() {
	$(".brush").css("background-color", $("#color-field").val());
	event.preventDefault();
}

function updatePixel() {
	$(this).css("background-color", $("#color-field").val())
}

$("#set-color").on("click", changeColor);

for (i = 0; i < 2000; i++){
	$("body").append("<div class='square'></div>");
	$(".square").on("mouseover", updatePixel)
}
}
)