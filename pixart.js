$(document).ready(function(){
var setColor = $("#set-color");
var square = $(".square")
setColor.on("click", changeColor);
function changeColor(){
  $(".brush").css("background",$("#color-field").val());
  event.preventDefault()

}

for(i=0; i<20; i++){
    $("body").append("<div class=square></div>");
}

$(".square").on("click", changeBackgroundColorToGreen)
  function changeBackgroundColorToGreen(){
    $(this).css("background", "green")
  }

});
