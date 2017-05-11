$(document).ready(function(){

var buttonClicked = $("#set-color");
function changecolor(evt){

  var colorSelected=$("#color-field").val();
  evt.preventDefault();
  $("div .brush").css("background-color",colorSelected);
  console.log("color changed to "+ colorSelected);
}

buttonClicked.on("click", changecolor );
})
