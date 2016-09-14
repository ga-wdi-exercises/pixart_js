
$('#set-color').click(function(){
  var $inputColor = $('#color-field').val();
 $('.brush').css("background", $inputColor);

});

function changeColor(color, pixel) {
  color = $("#color").val();
  pixel.css("background-color", color);
}
$( "form" ).submit(function( event ) {
  event.preventDefault();
});
