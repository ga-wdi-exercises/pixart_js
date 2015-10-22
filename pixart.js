$(document).ready(function() {
  $("#set-color").on("click",function(evt) {
    evt.preventDefault();
    var newColor = $("#color-field").val();
    $(".brush").css("background", newColor)
  })
})
