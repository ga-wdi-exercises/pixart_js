
//$( 'body' ).css('#brush' , '????')

$('#set-color').click(function(){
  event.preventDefault();
  console.log("this works");
  $('.brush').css('background' , $('input').val());
});
