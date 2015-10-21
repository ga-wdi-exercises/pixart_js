
var setColor = function(evt){
  var colorSelect = $(":text").val()
  console.log("Hey")
  evt.preventDefault()
  $(".brush").css("background-color", colorSelect)
}

$("button").on("click",setColor)
