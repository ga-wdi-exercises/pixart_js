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
for (i=0; i < 21; i++){
  var div = $("<div></div>").addClass("square");
  $("body").append(div);
}

//Turn individually clicked square divs green
$(".square").on("click",function(change){
  $(this).css("background","green")
})
