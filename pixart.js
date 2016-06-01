
var body = $("body");



$("#set-color").on("click", setColor)



function setColor(){
  event.preventDefault();
  var colorInput = $("#color-field").val();
  $(".brush").css("background-color", colorInput);
}


for(i = 0; i < 20; i++) {
  $("body").append('<div class="square"/>');
}
