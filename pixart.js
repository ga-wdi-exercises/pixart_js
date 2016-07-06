$(document).ready(function() {
  $("button").on("click", colorBrush);
  //input.val allows it to work for both click and return key for commits 1 and 2
  function colorBrush(e) {
    $(".brush").css("background", $("input").val());
    e.preventDefault();
  }
  //creating 20 of the square div class, commit 3
  for (var i = 0; i <= 8000; i++) {
    $("body").append("<div class='square'></div>")
  }

  $(".square").on("mouseover", colorSquare)
//commits 4 and 5, storing the input string in a variable to be used in the line 17 background change
  function colorSquare() {
    var inputColor = $("input").val();
    $(this).css("background", inputColor);
  }

});
