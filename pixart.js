$(document).ready(function(){

var button = $("button");
var brush = $(".brush");
// var div = $("<div/>").addClass("square")
// var handleClickEvent = function(e){
//   e.preventDefault();

button.on("click", function(e) {
  // var color = $("#form").submit();
  e.preventDefault();
});


  button.on("click", function() {
    var color = $( "input" ).val();
    brush.css("background", color);
  })

var i = 0;
do {
  $("body").append('<div class="square"></div>');
  i++;}
  while (i < 20);









})
