$(document).ready(function(){



$("#set-color").on("click", function(){
  event.preventDefault();
  var color = $("#color-field").val();
  $(".brush").css("background", color);
 });


// $("div div:first-of-type").on("click", function(){

for (var i = 0; i < 20; i++ ) {
$("body").append("<div class='square'></div>");
}
$(".square").each(function(index){
  $(this).on("click", function(){
  var brush = $(".brush").css("background-color");
  $(this).css("background", brush);

});
});



























});
