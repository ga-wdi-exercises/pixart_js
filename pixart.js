$(document).ready(function(){
  var textField = $('input:text');
  var button = $("#set-color");
  var brush = $(".brush")

  function changeBrushColorOnClick() {
    button.on("click", function(evt){
      evt.preventDefault()
      var colorInput = text.val();
      brush.css("background", colorInput);
    })
  }

  function changeBrushColorOnEnter() {
    textField.keyup(function (evt) {
      if (evt.keyCode === 13) {
          brush.css("background", textField.val());
      }
    })
  }

  function addPaintboard () {
    for (var i = 0; i < 8000; i++) {
      $("body").append("<div class='square'></div>");
    }
  }

  // Event listener for .square
  function addSquareEvents () {
    $(".square").on("mouseover", paintWithSquares)
  }

  // Make the individual DIV change color
  function paintWithSquares(evt) {
    var target = $(evt.target);
    if (target.is(".square")) {
      target.css("background", brush.css("background"))
    }
  }

  changeBrushColorOnClick();
  changeBrushColorOnEnter();
  addPaintboard();
  addSquareEvents();
})
