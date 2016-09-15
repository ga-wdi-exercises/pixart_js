$("#set-color").on("click",function(epd){
  var color = $("input").val()
  $(".brush").css("background",color)
  epd.preventDefault();
})
