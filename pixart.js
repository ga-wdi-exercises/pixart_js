var swatchArray = []

for (i=0;i<8000;i++) {
  var child = $("<div/>",{"class":"square"});
  $("body").append(child);
}

for (i=0;i<3;i++){
  var swatchChild = $("<div/>",{"class":"brush"});
  $(".controls").append(swatchChild);
}

var setColor = function(evt){
  evt.preventDefault();
  var startColor = $(".brush").eq(0).css("background-color")
  var colorSelect = $(":text").val();
  $(".brush").eq(0).css("background-color", colorSelect);
  var newColor = $(".brush").eq(0).css("background-color")
  if(startColor != newColor){
    swatchArray.unshift(colorSelect)
    for(i=1;i<4;i++){
      $(".brush").eq(i).css("background-color",swatchArray[i])
    }
  }
}

var setSquareColor = function(){
  paintColor = $(".brush").css("background-color")
  $(this).css("background-color",paintColor);
}

var swatchClick = function(){
  var swatchColor = $(this).css("background-color");
  swatchArray.unshift(swatchColor);
  $(".brush").eq(0).css("background-color",swatchColor)
}

$(".brush").on("click",swatchClick)
$("button").on("click",setColor)
$(".square").on("mouseover",setSquareColor)
$(".brush").css({"display":"inline-block"})
