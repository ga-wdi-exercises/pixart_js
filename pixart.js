$(document).ready(function () {

function changeColor(color) {
  $(".brush").css("background-color",color)
}

$("#set-color")[0].addEventListener("click", function(event){
  event.preventDefault();
  var colorChoice = $("#color-field").val();
  changeColor(colorChoice)
});

$("#set-color")[0].addEventListener("keyDown", function(event){
  event.preventDefault();
  var colorChoice = $("#color-field").val();
  changeColor(colorChoice)
});

for (var i = 1; i <= 8000; i++) {
  var newDiv = $("<div class='square'></div>");
  $("body").append(newDiv);
}
$(".square").css({"height":"10px", "width":"10px", "margin":"0"});

$(".square").on("mouseover", function(){
  var colorChoice = $("#color-field").val();
  $(this).css("background-color",colorChoice);
})

})
