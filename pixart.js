$("#set-color, #color-field").on("click", function(event){
  event.preventDefault();
  var userInput = $("input").val();
  $(".brush").css("background-color", userInput);
})
