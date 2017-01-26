
$("button").on("click", function(e) {
  $(".brush").css("background", $("input").val());
  e.preventDefault();
})
