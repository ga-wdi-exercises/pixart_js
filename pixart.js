$(document).ready(function() {
  $("button").on("click", colorBrush);

  function colorBrush(e) {
    $(".brush").css("background", $("input").val());
    e.preventDefault();
  }

});
