$(document).ready(function() {
  color = $('.brush').css('background');
  prior = [color];

  //create swatches
  for (i = 1; i <= 3; i++) {
    $('.brush').append('<div></div>');
    $('div').eq(i + 1).attr('class', 'swatch');
    $('div').eq(i + 1).attr('id', 'swatch' + i);
  }

  $('.swatch').css('height', '30px');
  $('.swatch').css('width', '30px');
  $('.swatch').css('margin', '5px 5px 5px 130px');

  //create canvas
  for(i=1; i<=8000; i++){
    var divNum = i+4;
    $('body').append('<div></div>');
    $('div').eq(divNum).attr('class', 'square');
  }

  $('.square').css('height', '10px');
  $('.square').css('width', '10px');
  $('.square').css('margin', '0');

  //paint tiles on mouseover
  $('.square').each(function() {
    $(this).on('mouseover', function(e) {
      $(this).css('background', color);
    })
  })

  //take user input to get paint color, update swatches
  $('button').on('click', function(e) {
    e.preventDefault();
    color = $('input').val();
    if (prior.indexOf(color) === -1){
      prior.unshift(color);
    };
    if (prior.length > 4) {
      prior.pop();
    };
    console.log(prior);
    $('.brush').css('background', color);
    $('#swatch1').css('background', prior[1]);
    $('#swatch2').css('background', prior[2]);
    $('#swatch3').css('background', prior[3]);
  })

  //not including this because of return automatically simulates a click
  // $('#color-field').on('keyup', function(e){
  //   if(e.keyCode === 13){
  //     e.preventDefault();
  //     color_p = color
  //     color = $('input').val()
  //     if (prior.indexOf(color_p)===-1){
  //       console.log(prior);
  //       prior.unshift(color_p);
  //     }
  //     if (prior.length>3) prior.pop();
  //     $('.brush').css('background', color);
  //     $('#swatch1').css('background', prior[0])
  //     $('#swatch2').css('background', prior[1])
  //     $('#swatch3').css('background', prior[2])
  //   }
  // })

  //use swatch to get paint color, update swatches
  $('.swatch').each(function() {
    $(this).on('click', function() {
      color = prior[jQuery.inArray(this, $('.swatch'))+1];
      prior.unshift(color);
      $('.brush').css('background', color);
      $('#swatch1').css('background', prior[1]);
      $('#swatch2').css('background', prior[2]);
      $('#swatch3').css('background', prior[3]);
    })
  })

})
