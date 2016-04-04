$(document).ready(function(){

function changeBrushColor(){
  event.preventDefault('button');
  inputColor = $('#color-field').val();
  $('div.brush').css("background-color", inputColor);
}

function changeSquareColor(){
  brushColor = $('div.brush').css("background-color");
  $(this).css("background-color", brushColor);
}

$('#set-color').on("click", changeBrushColor);
$('#set-color').on("submit", changeBrushColor);

for (i=0; i<=20; i++){
  $('<div></div>').appendTo('body').addClass('square');
}

$('div.square').on("click", changeSquareColor);

}); //ends document.ready
