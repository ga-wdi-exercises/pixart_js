
//event listener for return key and click
$('#form').on('submit', function(evt) {
  //stop link from going to google - interrupt
  evt.preventDefault();
  //chosen color
  brushColor= $('input').val()
  //change color attribute
  $('.brush').css('background', brushColor);
  $('h1').html('Trippy Pixel Art!')
});

//create 20 divs of .square and append to body
for (i=0; i<20; i++) {
  $('body').append('<div class="square"></div>')
};

//change color of each individual square to 'green' when clicked
$('.square').on('click', function(evt) {
  $(this).css('background', 'green')
});
