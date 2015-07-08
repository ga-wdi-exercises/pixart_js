
//$( 'body' ).css('#brush' , '????')

$('#set-color').click(function(){
  event.preventDefault();
  console.log("this works");
  $('.brush').css('background' , $('input').val());
});


for (var i = 0; i<20; i++)
  $('body').append('<div class = "square"></div>');

$('.square').click(function(){
  $(this).css('background' , 'green')
})

// $('.square').addClass().each(function(){
//   $(this).append();
// })
