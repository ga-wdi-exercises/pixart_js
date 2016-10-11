// $(document).ready(function(){
// 	console.log("hello world")
// })



var color = $("#color-field").val();


function changeColor() {
	$(".brush").css("background-color", $("#color-field").val());
	event.preventDefault();
}

$("#set-color").on("click", changeColor);