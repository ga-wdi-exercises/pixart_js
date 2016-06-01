
var body = $("body");
var colors = []
$(".brush").attr('id', 'brush0');



$("#set-color").on("click", setColor)

function setColor(){
  event.preventDefault();
  var colorInput = $("#color-field").val();


  colors.push($("#color-field").val());
  console.log(colors);

  $("#brush0").css("background-color", colors[colors.length-1]);
  $("#brush1").css("background-color", colors[colors.length-2]);
  $("#brush2").css("background-color", colors[colors.length-3]);

}
for (i=1; i<3; i++){
  $(".controls").append('<div class="brush" id="brush' + i + '"/>');
}

for(i = 0; i < 8000; i++) {
  $("body").append('<div class="square"/>');
}

$(".square").on("mouseover",function(){
  var colorInput = $("#color-field").val();
  $(this).css("background-color", colorInput);
});


$(".brush").on("click", function() {
  var brushColor = $(this).css("background-color");
  console.log(brushColor);

  $(".square").on("mouseover",function(){
    $(this).css("background-color", brushColor);
  })
})
