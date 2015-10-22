//1)type color you want (hex code, rgb) in input-field ID = "#color-field", then hit "set-color", then have the box
// "brush" change color to the one you specified

//on click have the box "brush" change to color you specified in pickColor

$(document).ready(function() {

var setColorButton = $("#set-color");
var brushColor = $(".brush");


  var setColor=function(evt) {
    evt.preventDefault();
    var userInput = $("#color-field").val();
    brushColor.css("background", userInput);
  }
setColor.on("click", setColor);

})

// $(".awesome").on("click", function(){
//   $(this).css("background-color", "red");
// })




















// });
