
$("button").on("click", function(e) {
  $(".brush").css("background", $("input").val());
  e.preventDefault();
})

$(document).on("keypress", function(e) {
  if (e.which == 13) {
    $(".brush").css("background", $("input").val());
    e.preventDefault();
  }
})
