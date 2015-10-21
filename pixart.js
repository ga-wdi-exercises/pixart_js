$(document).ready(function(){

  $('button').on('click', function(e){
    e.preventDefault();
    var color = $('input').val()
    $('.brush').css('background', color);
  })

  $('#color-field').on('keyup', function(e){
    if(e.keyCode === 13){
      e.preventDefault();
      var color = $('input').val()
      $('.brush').css('background', color);
    }
  })

  for(i=1; i<=20; i++){
    divNum = i+1;
    $('body').append('<div></div>');
    $('div').eq(divNum).attr('class', 'square');
    }

  $('.square').each(function(){
    $(this).on('click', function(e){
      $(this).css('background', 'green')
    })
  })


})
