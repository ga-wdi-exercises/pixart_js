
var counter = 0

$("#set-color").on("click",function(){
  var brush = $(".brush")
  var color = $("#color-field").val();
  brush.css("background-color",color);
  event.preventDefault();
})
var counter = 0
while(counter < 21){
  var square = "<div class = 'square'></div>"
  $("body").append(square)
  counter++
}
