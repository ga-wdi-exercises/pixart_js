var colorButton = $("#set-color");
var colorField = $("#color-field");


function setColor(){
    event.preventDefault()
  $(".brush").css("background-color", colorField.val());
  }


colorButton.on("click", setColor);
