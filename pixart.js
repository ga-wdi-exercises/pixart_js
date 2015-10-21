
//event listener for return key and click
$('#form').on('submit', function(evt) {
  console.log('Return Key');
  //stop link from going to google - interrupt
  evt.preventDefault();
  //chosen color
  brushColor= $('input').val()
  //change color attribute
  $('.brush').css('background', brushColor);
  $('h1').html('Trippy Pixel Art!')
});
