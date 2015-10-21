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

for (var i = 1; i <=8000; i++) {
  var newSquare = document.createElement('div')
  newSquare.setAttribute('class', 'square')
  document.body.appendChild(newSquare);
};

$(".square").css({
  "height": "10px",
  "width": "10px",
  "margin": 0
})

$(".square").on("mouseover", function (evt){
  var userInput = $("#color-field").val();
  $(this).css({
    background: userInput
});
})
