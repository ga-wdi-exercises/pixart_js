$(document).ready(function(){

  var setColor = $('#set-color');
  var colorfield = $('color-field');

  setColor.on("click", changeColor);

  function changeColor(){
    $(".brush").css("background", $('#color-field').val());
    event.preventDefault();
  }
  for (var i = 0; i < 8000; i++){
  $("body").append("<div class=square></div>");
  }

  $(".square").on("mouseover", function(){
    $(this).css("background", $('#color-field').val());
  })
});
