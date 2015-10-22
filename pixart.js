// assign color entered in input field to brush and make add last brush color to palette
$( document ).ready( function () {
$("#set-color").on('click',function(event){
    event.preventDefault();
    var colorSet4 = $('#second-last-color').css('background');
    var colorSet3 = $('#last-color').css('background');
    var colorSet2 = $('.brush').css('background');
    var colorSet = $('#color-field').val();
    $('.brush').css('background-color',colorSet);
    $('#last-color').css('background',colorSet2);
    $('#second-last-color').css('background',colorSet3);
    $('#third-last-color').css('background',colorSet4);
  });

//if color on palette is clicked add that color to the brush
$('.previous-color').on('click',function(event){
  event.preventDefault();
  var colorSet = $(this).css('background');
  $('.brush').css('background',colorSet);
})
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
