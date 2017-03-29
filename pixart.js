var colorButton = $("#set-color");
var colorField = $("#color-field");


function setColor(){
    event.preventDefault()
  $(".brush").css("background-color", colorField.val());
  }


colorButton.on("click", setColor);

for (var i = 8000 ; i > 0; i--) {
 var tinySquares = $('<div class=square> </div>');
 $('body').append(tinySquares);
}

$(".square").on("mouseover", green);
function green(){
    $(this).css("background", colorField.val());
}
