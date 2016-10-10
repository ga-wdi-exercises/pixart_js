var button = $("#set-color");


button.on("click", colorCheck);
button.on("click", preventReset);

//*checks for color
function colorCheck() {
// alert($("input").val());
$(".brush").css("background", $("input").val());

}

function preventReset() {
  event.preventDefault();

}
//enter key automatically works
