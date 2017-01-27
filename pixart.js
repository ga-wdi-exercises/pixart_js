var setColor = $("#set-color")
var brushBox = $(".brush")
var	color
var colorField = $("#color-field")
var squareNumber = $(".square").length
var square = $(".square")

function changeBrushBox(){
	color = $('#color-field').val()
	brushBox.css("background", color);
	return false
}

setColor.on("click", changeBrushBox)
colorField.on("submit", changeBrushBox)

for (i=0; i < 20; i++) {
	$( "body" ).append( "<div class='square'></div>" );
}

// $(".square").on("click", user.sayName);

// function changeToGreen()

$(".square").on("click", function(){
	$(this).css("background-color", "green");
} );