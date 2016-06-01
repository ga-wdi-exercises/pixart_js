
var body = $("body");

$("#set-color").on("click", setColor)

function setColor(){
  event.preventDefault();
  var colorInput = $("#color-field").val();
  $(".brush").css("background-color", colorInput);
}

for (i=0; i<2; i++){
  $(".controls").append('<div class="brush"/>');
}

for(i = 0; i < 8000; i++) {
  $("body").append('<div class="square"/>');
}


$(".square").on("mouseover",function(){
  var colorInput = $("#color-field").val();

  $(event.target).css("background-color", colorInput);
});




// * Add a color swatch. You should have 3 boxes with the most recent 3 colors used. When you click on each of those boxes, it should set the current brush color back to that color.
//
// append 2 more .brush divs
