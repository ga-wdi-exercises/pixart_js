
var body = $("body");
var colors = []



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

$(".brush").attr('id', 'brush0');

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



//
//
//
//
// var inputs = new Array();
//  $("input").each(function(){
//      inputs.push($(this).val());
//  })
//
//  console.log(inputs);


// you should have 3 boxes with the most recent 3 colors used. When you click on each of those boxes, it should set the current brush color back to that color.
//
// append 2 more .brush divs
