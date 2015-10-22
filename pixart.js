// assign color entered in input field to brush
$( document ).ready( function () {
$("button").on('click'||'13.keycode',function(event){
    event.preventDefault();
    var colorSet = $('#color-field').val();
    $('.brush').css('background-color',colorSet);
  });
})

//make 20 squares
var makeSquares = []
for (i = 0; i < 20; i++){
  makeSquares = $(document.createElement('div'));
  makeSquares.addClass('square')
}
$('body').append(makeSquares);
