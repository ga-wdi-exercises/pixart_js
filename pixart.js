$(document).ready(function(){

function changeBrushColor(){
  event.preventDefault('button');
  brushColor = $('#color-field').val();
  $('div.brush').css("background-color", brushColor);
}

$('#set-color').on("click", changeBrushColor);

}); //ends document.ready
