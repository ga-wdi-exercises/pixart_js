var currentColorChoice = $(".brush").css("background-color");
$("#set-color, #color-field").on("click", function(event){
  event.preventDefault();
  var userInput = $("input").val();
  $(".brush").css("background-color", userInput);
  currentColorChoice = $(".brush").css("background-color");
})
for(var i = 0; i < 20; i++) {
  $("body").append("<div class='square'></div>");
}
$(".square").on("click", function(){
  $(this).css("background-color", currentColorChoice);
})
