
//variable
var currentColor



function updateCSS() {
	$(".brush").css("background-color", currentColor)
}

//store color to global color variable



//click event
$("#form").on("submit", function (event) {
	event.preventDefault()
	console.log('preventing default');
	currentColor = $("input").val();
	console.log(currentColor);
	updateCSS();
});














