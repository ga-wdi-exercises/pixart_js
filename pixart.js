
//Get and Set color//

var clickColor = $("#set-color");

function getAndSetColor(){
  var inputColor = $("#color-field").val();
  $(".brush").css("background", inputColor);
  event.preventDefault();
}

clickColor.on("click", getAndSetColor);
