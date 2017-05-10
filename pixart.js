var colorSelected="#color-field"

var buttonClicked = $("#set-color");
function changecolor(){
  $(".brush").css("color","colorSelected")
}

buttonClicked.on("click",changecolor())
