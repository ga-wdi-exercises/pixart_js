var colorButton = $("#set-color");
var colorField = $("#color-field");


function setColor(){
    event.preventDefault()
  $(".brush").css("background-color", colorField.val());
  }


colorButton.on("click", setColor);

for (var i = 20 ; i > 0; i--) {
 var tinySquares = $('<div class=square> </div>');
 $('body').append(tinySquares);
}

$(".square").on("click", green);
function green(){
    $(this).css("background", "green");
}
