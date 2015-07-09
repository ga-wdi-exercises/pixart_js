$("#set-color").on("click", function(event) {
  event.preventDefault();
  console.log("set color clicked");
  var inputColor = $("input").val()
  $(".brush").css("background", inputColor)
});

$("form").submit(function(event) {
  event.preventDefault();
  console.log("set color clicked");
 var inputColor = $("input").val()
  $(".brush").css("background", inputColor)
});

for (var i = 0; i < 21; i++) {
  $("body").append(
    $('<div/>')
    .addClass("square"))
  console.log([i]);
}

$(".square").on("click", function(index){
  console.log($("this"));
  var inputColor = $("input").val()
  $(this).css("background", inputColor)
});
