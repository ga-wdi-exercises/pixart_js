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
// var div = $(document.createElement('div'))
//   .addClass('square');
for(var i =0; i < 20; i++){
  $('body').append('<div class= "square"/>');
}
