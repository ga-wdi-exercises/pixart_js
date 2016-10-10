$(document).ready(function(){

  var setColor = $('#set-color');
  var colorfield = $('color-field');

  setColor.on("click", changeColor);

  function changeColor(){
    $(".brush").css("background", $('#color-field').val());
    event.preventDefault();
  }

  colorfield.on('keyup', function(e){
    if (e.keyCode == 13){
      $(".brush").css("background", $('#color-field').val());
      event.preventDefault();
    }
  });

});
