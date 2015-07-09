$(document).ready(function (){

$("#set-color")[0].addEventListener("click", function(){
  event.preventDefault();
  $(".brush").css("background-color", $("#color-field").val());
})
var i = 0;
while( i < 20){
$("body").append("<div class='square'></div>");
i++;
}
var squares = $("div.square");
for(var x = 0; x < squares.length; x++){
squares.eq(x).on("click", function(){
  $(this).css("background-color", "green");
})
}










});
