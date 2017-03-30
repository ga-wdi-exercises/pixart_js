var input = $('#color-value'); //this is the selected color
var button = $("#set-color"); // confirm button
var brush = $(".brush");// application area

function changeColor() {
	selectedColor = button.val();
	brush.css("background", brush);
}

button.click(changeColor);
button.on('submit', changeColor);