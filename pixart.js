$(function(){

 $('button').click(function(changeColor) {
  changeColor.preventDefault();
   });

   $('button').on('click', function(){
     console.log('F* YEAH');

     var color = $('#color-field').val();
     $('.brush').css('background-color', color);
   });
 });
