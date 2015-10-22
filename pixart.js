$(document).ready(function(){
  var color = $('.brush').css('background')
  $('button').on('click', function(e){
    e.preventDefault();
    color = $('input').val()
    $('.brush').css('background', color);
  })

  $('#color-field').on('keyup', function(e){
    if(e.keyCode === 13){
      e.preventDefault();
      $('.brush').css('background', color);
    }
  })

  for(i=1; i<=8000; i++){
    divNum = i+1;
    $('body').append('<div></div>');
    $('div').eq(divNum).attr('class', 'square');
    }
  $('.square').css('height', '10px');
  $('.square').css('width', '10px');
  $('.square').css('margin', '0');

  $('.square').each(function(){
    $(this).on('mouseover', function(e){
      $(this).css('background', color)
    })
  })

})
