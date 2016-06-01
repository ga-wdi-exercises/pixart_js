

$("#set-color").on("click",function(){
  var brush = $(".brush")
  var color = $("#color-field").val();
  brush.css("background-color",color);
  event.preventDefault();

})
