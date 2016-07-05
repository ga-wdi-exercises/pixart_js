
var colorTrack = [];
$(document).ready(function(){
  $('button').on('click', function() {
    var color = $('input').val();
    colorTrack.push(color);
    // This was my attempt to move the colors around but it clears them. I don't know.. i don't know
    // if(colorTrack.length === 4) {
    //   console.log('test');
    //   colorTrack[0] = colorTrack[colorTrack.length];
    //   colorTrack[1] = colorTrack[0];
    //   colorTraack[2] = colorTrack[1];
    // };
    $('.brush').css({'background': color});
    event.preventDefault();
  });
  $('button').keypress(function() {
    var color = $('input').val();
    $('.brush').css({'background': color});
    event.preventDefault();
  });
  var count = 8000;
  while( count > 0) {
    var new_div = $('<div></div>').addClass("square");
    $('body').append(new_div);
    count--;
  };
  $('.square').click(function(){
    this.style.backgroundColor = 'green';
  });
  $(".square").on("mouseover", paint);
  function paint() {
    var color = $('input').val();
    if(color){
      $(this).css("background", color);
    } else{
      $(this).css("background", "pink");
    };
  };

  var color_div_one = $('<div></div>').addClass("color_box one");
  var color_div_two = $('<div></div>').addClass("color_box two");
  var color_div_three = $('<div></div>').addClass("color_box three");
  $('body').prepend(color_div_one);
  $('body').prepend(color_div_two);
  $('body').prepend(color_div_three);




  $('button').on('click', function(){
    var color = $('input').val();
    $('.one').css({'background': colorTrack[0]});
    event.preventDefault();
  });

  $('button').on('click', function(){
    var color = $('input').val();
    $('.two').css({'background': colorTrack[1]});
    event.preventDefault();
  });

  $('button').on('click', function(){
    var color = $('input').val();
    $('.three').css('background', colorTrack[2]);
  });
  console.log(colorTrack.length);
});



