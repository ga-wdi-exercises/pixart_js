
$(document).ready(function(){
  console.log("Working?")

var button = $("button");
var input = $("input");



  button.on("click", changeBrushColor);


  function changeBrushColor(evt) {
    evt.preventDefault();

    var newColor = input.val();
  $(".brush").css("background", newColor);
      }
  });
