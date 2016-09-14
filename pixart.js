
var button = $("#set-color")
var brush = $(".brush")


function change(e) {
  // colorSel.
  var colorSel = $("#color-field").val()
  brush.css("background", colorSel)
  e.preventDefault()

}
button.on("click", change)

for (i=0;i<21; i++){
  $("body").append("<div class='square'></div>")
}


$(".square").on("click", function () {
  $(this).css("background", "green")
})
