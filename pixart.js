var inputField = $("#color-field");
var buttonColor = $("#set-color");
var brushbox = $(".brush");

function setColor(){
event.preventDefault();
$(".brush").css("background-color",inputField.val());
};
$("#set-color").on('click',setColor);
