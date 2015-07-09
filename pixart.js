$(document).ready(function (){

$("#set-color")[0].addEventListener("click", function(){
  event.preventDefault();
  $(".brush").css("background-color", $("#color-field").val() || "#1B4370");
})

var i = 0;

while( i < 8000){
$("body").append("<div class='square'></div>");
i++;
}

var squares = $("div.square");
for(var x = 0; x < squares.length; x++){
squares.eq(x).on("mouseover", function(){
  $(this).css("background-color", $("#color-field").val() || "#1B4370");
})
}










});
