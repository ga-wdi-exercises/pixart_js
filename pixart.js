// assign color entered in input field to brush
$( document ).ready( function () {
$("button").on('click',function(event){
    event.preventDefault();
    var colorSet = $('#color-field').val();
    $('.brush').css('background-color',colorSet);
  });
//make 20 squares
for(var i = 0; i < 8000 ; i++){
$('body').append($('<div class="square">'));
}
//change color of square that's clicked on
  $('.square').on('mouseover',function(){
    var brushColor = $('.brush').css('background-color');
    $(this).css('background',brushColor);
  });
//change size of squares
  $(".square").css('height','10px');
  $(".square").css('width','10px');

  //BONUS: Add most recently used colors






  //making it look nice
$('.previous-color').css('height','50px');
$('.previous-color').css('width','50px');
$('.previous-color').css('display','inline-block');
$('.previous-color').css('border-color','#2B0605');
$('.previous-color').css('border-width','5px');
$('.previous-color').css('border-style','solid');
$('.previous-color').css('margin-bottom','15px');
$('.previous-color').css('border-radius','15px');
$('.brush').css('border-width','5px');
$('.brush').css('border-style','solid');
$('.brush').css('border-color','#2B0605');
$('.brush').css('border-radius','15px');
$('h1').css('color','#2B0605');
$('input').css('border-radius','15px');
$('input').attr('placeholder','Enter color here');
});
