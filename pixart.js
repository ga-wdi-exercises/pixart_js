$(document).ready(function() {
  $("#set-color").on("click", function(evt) {
    evt.preventDefault();
    $(".brush").css("background", $("#color-field").val());
  });
});
