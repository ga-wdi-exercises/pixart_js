var brushColor
var brushBox

// $("#set-color").on("input", function(){
// })

$("#set-color").on("click", function(e){
  e.preventDefault();
  brushColor = $("#color-field").val()
  brushBox = $(".brush").css("background", brushColor)

// resetting the input box
  $("#color-field").val("")
})
// console.log(brushColor)
