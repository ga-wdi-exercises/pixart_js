
$('#set-color').click(function(){
  var inputColor = $('#color-field').val();
 $('.brush').css("background", inputColor);

});

function changeColor(color, pixel) {
  color = $("#color").val();
  pixel.css("background-color", color);
}
$( "form" ).submit(function( event ) {
  event.preventDefault();
});

function createPixart() {
  var numSquares = 20
  for (var i = 0; i < 21; i++) {
    var Div = $("<div>").addClass("square");
    Div.appendTo("body");
    Div.on("mouseover", function() {
      changeColor($("#color").val(), $(this));
    })
  };
}

createPixart();
