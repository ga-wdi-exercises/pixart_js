$(document).ready(function() {
  $("#set-color").on("click", function(evt) {
    evt.preventDefault();
    $(".brush").css("background", $("#color-field").val());
  });
  function squareFactory() {
    for (var i = 0; i < 20; i++) {
      $("body").append("<div class='square'></div>");
    }
  }
  squareFactory();
});
