
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

//create 8000 divs of .square and append to body
for (i=0; i<8000; i++) {
  $('body').append('<div class="square"></div>')
};

//change color of each individual square to brushColor when mouseOver
$('.square').on('mouseover', function(evt) {
  $(this).css('background', brushColor)
});

//modify .square dimension values
$('.square').css('height', 10).css('width', 10).css('margin', 0)
