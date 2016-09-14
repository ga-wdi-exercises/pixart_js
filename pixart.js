// var setColor = $("#set-color");
// var inPut = $("#color-field");

$("#set-color").on("submit", changeBackground);
function changeBackground(){
  var color = $("#color-field").val();
$(".brush").css("background", color);
event.preventDefault()
}
// setColor.on("click",changeBackground);
