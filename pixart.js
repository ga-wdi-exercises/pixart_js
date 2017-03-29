
var inputField = $("#color-field");
var buttonColor = $("#set-color");
var brush = $(".brush");

function setColor(){
  event.preventDefault;
  brush.css("background-color",inputField.val());

}
buttonColor.on("click",setColor);
