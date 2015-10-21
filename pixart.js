$("#set-color").on("click", function (evt){
  evt.preventDefault();
  var userInput = $("#color-field").val();
  var brushBox = $(".brush").css({
    background: userInput
  });
})

$("#set-color").bind("keypress", function (evt){
  if (evt.keyCode == 13) {
  var userInput = $("#color-field").val();
  var brushBox = $(".brush").css({
    background: userInput
  });
  };
})
