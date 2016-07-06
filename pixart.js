$(document).ready(function() {
  $("button").on("click", colorBrush);
  //input.val allows it to work for both click and return key for commits 1 and 2
  function colorBrush(e) {
    $(".brush").css("background", $("input").val());
    e.preventDefault();
  }
  //creating 20 of the square div class, commit 3
  for (var i = 0; i <= 20; i++) {
    $("body").append("<div class='square'></div>")
  }
  $(".square").on("click", greenSquare)

  function greenSquare() {
    $(this).css("background", "green");
  }
});
