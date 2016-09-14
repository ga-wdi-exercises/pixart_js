
var setColor = $("#set-color")

function changeColor (e){
  var color = $('#color-field').val()
  $(".brush").css("background", color);
  e.preventDefault()
}
setColor.on("click", changeColor)

for (i=0; i<8000; i++){
  $("body").append("<div class='square'></div>");
}
$(".square").on("mouseover", function(){
  var color = $('#color-field').val()
  $(this).css("background", color);

})
