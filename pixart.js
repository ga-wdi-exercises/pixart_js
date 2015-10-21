
var setColor = function(evt){
  var colorSelect = $(":text").val()
  console.log("Hey")
  evt.preventDefault()
  $(".brush").css("background-color", colorSelect)
}

$("button").on("click",setColor)

for (i=0;i<20;i++) {
  var child = $("<div/>",{"class":"square"})
  $("body").append(child)
}
