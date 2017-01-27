//Set Color functionality and event listener
$("#set-color").on("click",function(epd){
  var color = $("input").val()
  $(".brush").css("background",color)
  epd.preventDefault();
})

//set event on keypress enter
$("#set-color").on("keypress","enter",function(epd){
  var color = $("input").val()
  $(".brush").css("background",color)
  epd.preventDefault();
})

//Appended 20 Divs to body with square class
//Modified code for 8000 divs instead of 20
for (i=0; i < 8001; i++){
  var div = $("<div></div>").addClass("square");
  $("body").append(div);
}

//Turn individually clicked square divs green
/*$(".square").on("click",function(change){
  $(this).css("background","green")
})*/

//Modified code for individual squares to be same color as input box when clicked
//Changed event from click to mouseover and painted scribbles
$(".square").on("mouseover",function(change){
  var color = $("input").val()
  $(this).css("background",color)
})
