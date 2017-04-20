// var setColor = $("#set-color");
// var inPut = $("#color-field");

$("#set-color").on("click", changeBackground);
function changeBackground(){
  var color = $("#color-field").val();
$(".brush").css("background", color);
event.preventDefault()
}
$("#set-color").on("click",changeBackground);
for (i = 0; i < 8001; i+=1){
  var addDiv = $("<div class='square'></div>");
  $("body").append(addDiv);
};

$(".square").on("mouseover", changeToGreen);
function changeToGreen(){
  var color = $("#color-field").val();
$(this).css("background", color);
}
