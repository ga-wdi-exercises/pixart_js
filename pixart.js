$("button").click(function(e){
  var brush = $(".brush");
  var color = $("#color-field").val();
  e.preventDefault();
  brush.css("background-color", color)
});

// var colors = []
//
// $("#set-color").on("click", setColor)
//
// function setColor(){
//  e.preventDefault();
//  var colorInput = $("#color-field").val();
//
//  colors.push($("#color-field").val());
//  console.log(colors);
//
//  $("#brush0").css("background-color", colors[colors.length-1]);
//  $("#brush1").css("background-color", colors[colors.length-2]);
//  $("#brush2").css("background-color", colors[colors.length-3]);
//
// }
$('.brush').attr('id', 'brush0');

for (i=1; i<3; i++){
  $('.controls').append('<div class="brush" id="brush' + i + '"/>');
}

$("#form").keypress(function(e){
  enterKey;
})

function enterKey(){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(e.keycode == '13'){
    var brush = $(".brush");
    var color = $("#color-field").val();
    brush.css("background-color", color)
    return true
  };
}

for(var i =0; i < 8000; i++){
  $("body").append('<div class= "square"/>');
}

$(".square").mouseover(function(e){
  var color = $("#color-field").val();
  $(e.target).css("background-color", color);
})
