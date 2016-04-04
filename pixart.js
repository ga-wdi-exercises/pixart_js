$(document).ready(function(){

function changeBrushColor(){
  event.preventDefault('button');
  brushColor = $('#color-field').val();
  $('div.brush').css("background-color", brushColor);
}

$('#set-color').on("click", changeBrushColor);
$('#set-color').on("submit", changeBrushColor);
}); //ends document.ready
