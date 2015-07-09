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

//var createDiv = $("body").append("<div>Blank</div>")
for (var i = 0; i < 21; i++) {
  $("body").append("<div>Green</div>").addClass(".square")
  console.log([i]);
}
