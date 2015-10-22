$(document).ready(function(){

  //Change brush color on click
  function changeBrushColorClick() {
    var button = $("#set-color");
    button.on("click", function(evt){
      evt.preventDefault()
      $(".brush").css("background", $("#color-field").val());
      console.log("You definitely clicked the button!");
    })
  }
  changeBrushColorClick();

  //Change brush color on enter
  function changeBrushColorEnter() {
    var textField = $('input:text');
    textField.keyup(function (evt) {
      if (evt.keyCode === 13) {
          $(".brush").css("background", textField.val());
          console.log("You definitely hit enter!");
      }
    })
  }
  changeBrushColorEnter();

  // Create paintboard
  for (var i = 0; i < 8000; i++) {
    $("body").append("<div class='square'></div>");
  }

  // Event listener for .square
  function squareEvents () {
    $(".square").on("mouseover", squareColorUpdate)
  }
  squareEvents()

  // Make the individual DIV change color
  function squareColorUpdate(evt) {
    var target = $(evt.target);
    if (target.is(".square")) {
    target.css({
      "background" : $("#color-field").val(),
      "height" : "10px",
      "width" : "10px",
      "margin" : "0"
    })
    }
  }
})
