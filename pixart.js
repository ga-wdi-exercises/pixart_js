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
