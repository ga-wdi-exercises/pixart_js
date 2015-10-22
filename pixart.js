$(document).ready(function(){
  color = $('.brush').css('background')
  var color_p = color
  var color_pp = color
  var color_ppp = color

  $('button').on('click', function(e){
    e.preventDefault();
    color_ppp = color_pp
    color_pp = color_p
    color_p = color
    color = $('input').val()
    $('.brush').css('background', color);
    $('#swatch1').css('background', color_p)
    $('#swatch2').css('background', color_pp)
    $('#swatch3').css('background', color_ppp)
  })

  // $('#color-field').on('keyup', function(e){
  //   if(e.keyCode === 13){
  //     e.preventDefault();
  //     color_ppp = color_pp
  //     color_pp = color_p
  //     color_p = color
  //     color = $('input').val()
  //     $('.brush').css('background', color);
  //     $('#swatch1').css('background', color_p)
  //     $('#swatch2').css('background', color_pp)
  //     $('#swatch3').css('background', color_ppp)
  //   }
  // })



  for(i=1; i<=3; i++){
    $('.brush').append('<div></div>');
    $('div').eq(i+1).attr('class', 'swatch');
    $('div').eq(i+1).attr('id', 'swatch'+i);
  }

  $('.swatch').css('height', '30px');
  $('.swatch').css('width', '30px');
  $('.swatch').css('margin', '5px 5px 5px 130px')

  $('.swatch').each(function(){
    $(this).on('click', function(){
        color_ppp = color_pp;
        color_pp = color_p;
        color_p = color;
        color = color_pp;
        $('.brush').css('background', color);
        $('#swatch1').css('background', color_p);
        $('#swatch2').css('background', color_pp);
        $('#swatch3').css('background', color_ppp);
      })
  })



  for(i=1; i<=8000; i++){
    var divNum = i+4;
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
