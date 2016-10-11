$(document).ready(function(){

var button = $("button");
var brush = $(".brush");
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


})
