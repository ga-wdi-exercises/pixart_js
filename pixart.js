
//event listener
$('#set-color').on('click', function(evt) {
  console.log('Clicked');

  //stop link from going to google - interrupt
  evt.preventDefault();
  //click setup
//var clickButton=$('#set-color');

  //chosen color
  brushColor= $('input').val()
  //change color attribute
  $('.brush').css('background', brushColor);
});
