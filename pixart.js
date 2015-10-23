var colorField = $("#color-field")
var setColor = $("#set-color")

$(document).ready(function(){

  setColor.on("click",function(evt){
    evt.preventDefault()
    color = colorField.val()
    $(".brush").css("background", color)
  })

  for(i = 0; i<8000; i++) {
    $("body").append($("<div class='square'></div>"))
  }

  $(".square").on("mouseover", function(){
    color = colorField.val()
    $(this).css("background", color);
  })

})
