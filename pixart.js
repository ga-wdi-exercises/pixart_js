
var setColor = function(evt){
  var colorSelect = $(":text").val()
  evt.preventDefault()
  $(".brush").css("background-color", colorSelect)
}

$("button").on("click",setColor)

for (i=0;i<8000;i++) {
  var child = $("<div/>",{"class":"square"})
  $("body").append(child)
}

var setSquareColor = function(){
  paintColor = $(".brush").css("background-color")
  $(this).css("background-color",paintColor);
}

$("button").on("click",setColor)
$(".square").on("mouseover",setSquareColor)
