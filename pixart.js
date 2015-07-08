/*$("#set-color").on("click", function(event) {
  event.preventDefault();
  console.log("set color clicked");
  var inputColor = $("input").val()
  $(".brush").css("background", inputColor)
});*/

$("form").submit(function(event) {
  event.preventDefault();
  console.log("set color clicked");
 var inputColor = $("input").val()
  $(".brush").css("background", inputColor)
});
