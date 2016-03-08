$("#set-color").click(function (evt) {
  evt.preventDefault()
  var color = $("#color-field").val()
  $(".brush").css("background-color", color)
  $(".square").css("background-color", color)
});

for (var i =0; i < 20; i++) {
var div = $("<div class=square></div>")
console.log(div)
$("body").append(div)
};
