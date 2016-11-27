$(document).ready(function() {

  var color;

  //commit 1: 'Set Color' button changes block color
  $('#set-color').on('click', function(){
    //prevents page from refreshing
    event.preventDefault();
    color = $('#color-field').val();
    $('.brush').css('background-color', color);
  })

  //commit 2: add 'Enter' key functionality
  $('#color-field').on('keypress', function(e){
    var key = e.which;
    color = $(this).val();
    if (key === 13) {
      $('.brush').css('background-color', color);
    }
  })

  //commit 3: create 20 divs & append to body
  for (var i=0; i<20; i++) {
    $('body').append('<div class="square"></div>');
  }

  //commit 4: when clicked, change squares' color to green
  $('.square').on('click',function() {
    color = $('#color-field').val();
    // $(this).css('background-color', 'green');

  //commit: 5: color is now based on input value
    $(this).css('background-color', color);
  })

});
