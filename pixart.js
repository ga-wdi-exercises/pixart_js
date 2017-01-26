$(document).ready(
  $("#set-color").click(function(event) {
    event.preventDefault();
    $(".brush").css('background', $("#color-field").val());
  })
);
