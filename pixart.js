
$(document).ready(function(){

var button = $("button");
var input = $("input");



  button.on("click", changeBrushColor);
  button.on("keypress", changeBrushColor);


  function changeBrushColor(evt) {
    evt.preventDefault();


    var newColor = input.val();
  $(".brush").css("background", newColor);
}


  for ( var i = 0; i < 20; i++) {
    $("body").append("<div class='square'></div>");
};

});
