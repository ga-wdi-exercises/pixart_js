

$("#set-color").click(function (evt) {
  evt.preventDefault()
  var color = $("#color-field").val()
  $(".brush").css("background-color", color)
});


for (var i =0; i < 10000; i++) {
var div = $("<div class=square></div>")
$("body").append(div)
}

var square = $(".square")


square.on("mouseover", function() {
var color = $("#color-field").val()
$(this).css("background-color", color)
})
