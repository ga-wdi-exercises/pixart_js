var brushColor
var brushBox
var square = '<div class="square"></div>'
// $("#set-color").on("input", function(){
// })

$("#set-color").on("click", function(e){
  e.preventDefault();
  brushColor = $("#color-field").val()
  brushBox = $(".brush").css("background", brushColor)
  // $("body").append("<div class="square"></div>")

// resetting the input box
  $("#color-field").val("")
})
console.log(brushColor)
function addSquares() {
  $("body").append(square)
}
for (i = 0; i < 8000; i++) {
  addSquares()
}
$(".square").mouseover(function(evt){
  $(evt.target).css("background", brushColor)
})
