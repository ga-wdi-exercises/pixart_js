var button = $("button");

var handleClickEvent = function(e){
  e.preventDefault();
  $( "input#color-field" ).keyup(function() {
      var value = $( this ).val();
      $(".brush").css('background-color', value);
    })
    .keyup();
}
button.on("click", handleClickEvent);

for(var i = 0; i<=8000; i++){
  $("body").append("<div class ='square'></div");
};
$(".square").css("height", "10px");
$(".square").css("width", "10px");
$(".square").on("click", function(){
  $("this").css("background-color", "green")
})
