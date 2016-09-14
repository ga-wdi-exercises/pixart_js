
var setColor = $("#set-color")

function changeColor (e){
  var color = $('#color-field').val()
  $(".brush").css("background", color);
  e.preventDefault()
}
setColor.on("click", changeColor)

for (i=0; i<20; i++){
  $("body").append("<div class='square'></div>");
}
$(".square").on("click", function(){
  $(this).css("background", 'green');
})
