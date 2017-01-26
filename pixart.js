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
  //commit 6: changes value to 8000
  for (var i=0; i<8000; i++) {
    $('body').append('<div class="square"></div>');
  }

  //commit 4: when clicked, change squares' color to green
  //commit 6: changed the event from 'click' to 'mouseover'
  $('.square').on('mouseover',function() {
    color = $('#color-field').val();
    // $(this).css('background-color', 'green');

  //commit: 5: color is now based on input value
    $(this).css('background-color', color);
  })
});
