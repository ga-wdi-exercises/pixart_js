$("#set-color").on("click", function(event) {
  event.preventDefault();
  console.log("set color clicked");
  var inputColor = $("input").val();
  $(".brush").css("background", inputColor);
});

$("form").submit(function(event) {
  event.preventDefault();
  console.log("set color clicked");
 var inputColor = $("input").val();
  $(".brush").css("background", inputColor);
});

for (var i = 0; i < 8001; i++) {
  $("body").append(
    $('<div/>')
    .addClass("square"));
}

$(".square").on("mouseover", function(index){
  var inputColor = $("input").val();
  $(this).css("background", inputColor);
});
