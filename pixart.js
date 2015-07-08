
//$( 'body' ).css('#brush' , '????')

$('#set-color').click(function(){
  event.preventDefault();
  console.log("this works");
  $('.brush').css('background' , $('input').val());
});


for (var i = 0; i<8000; i++)
  $('body').append('<div class = "square"></div>');

$('.square').mouseover(function(){
  $(this).css('background' , $('input').val())
})

// $('.square').addClass().each(function(){
//   $(this).append();
// })
