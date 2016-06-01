$("button").click(function(e){
  var brush = $(".brush");
  var color = $("#color-field").val();
  e.preventDefault();
  brush.css("background-color", color)
});

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
