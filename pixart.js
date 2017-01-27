$("#set-color").on("click", function() {
  event.preventDefault();
  var color = $("#color-field").val();
  $(".brush").css("background-color", color);
});
var setBrushColor = $(".button").on("click", setBrushColor);

for (var i = 0; i < 8000; i++) {
  $("body").append($("div class=square></div"));
}

$("square").on("mouseover", (function(){
  $(this).css("background-color", color).prop("value");
}));
