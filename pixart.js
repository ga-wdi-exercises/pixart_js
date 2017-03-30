var inputField = $("#color-field");
var buttonColor = $("#set-color");
var brushbox = $(".brush");

function setColor(){
event.preventDefault();
$(".brush").css("background-color",inputField.val());
};
$("#set-color").on('click',setColor);
for(var i = 0; i <8000; i++){
  $("body").append("<div class = square ></div>");
}
$(".square").on("mouseover",function(){
  $(this).css("background-color",inputField.val());
});
