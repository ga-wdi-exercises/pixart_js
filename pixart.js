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

for (var i = 1; i <=20; i++) {
  var newSquare = document.createElement('class')
  newSquare.setAttribute('class', 'square')
  document.body.appendChild(newSquare);
}
