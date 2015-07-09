for(var i = 0; i < 8000; i++){
$("body").append("<div class=square></div>")
  }

var colorVal

$( "#set-color" ).click(function() {
  colorVal= $("#color-field").val()
  event.preventDefault();
  $(".brush").css("background-color", colorVal);
  $("input").val("")
});

$("#color-field").keyup(function(e){
  if(e.which === 13){
  $(".brush").css("background-color", colorVal);
  }
})
$(".square").mouseover(function(){
   $(this).css("background-color", colorVal)
 });
