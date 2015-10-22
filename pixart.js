// assign color entered in input field to brush
$( document ).ready( function () {
$("button").on('click',function(event){
    event.preventDefault();
    var colorSet = $('#color-field').val();
    $('.brush').css('background-color',colorSet);
  });
//make 20 squares
for(var i = 0;i<20;i++){
$('body').append($('<div class="square">'))
}
//change color of square that's clicked on
  $('.square').on('mouseover',function(){
    var brushColor = $('.brush').css('background-color');
    $(this).css('background',brushColor)
  });
})
//change size of squares
$(".square").css('height','10px')
$(".square").css('width','10px')
