$(document).ready(function(){

var buttonClicked = $("#set-color");
var colorSelected=$("#color-field").val();
function changecolor(evt){
  evt.preventDefault();
  $("div .brush").css("background-color",colorSelected);
  console.log("color changed to "+ colorSelected);
}

buttonClicked.on("click", changecolor );
colorSelected.on("keypress",changecolor);

})
