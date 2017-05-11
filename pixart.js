$(document).ready(function(){

var buttonClicked = $("#set-color");

function changeColor(evt){
  var colorSelected=$("#color-field").val();
  evt.preventDefault();
  $("div .brush").css("background-color",colorSelected);
  console.log("color changed to "+ colorSelected);
}

buttonClicked.on("click",changeColor);

$("#color-field").on("keypress",enterKeyPressed);
function enterKeyPressed(e){
  if (e==13)
  {
    changeColor();
  }
}

})
