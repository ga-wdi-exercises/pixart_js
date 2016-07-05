$(document).ready(function(){
  $('button').on('click', function() {
    var color = $('input').val();
    $('.brush').css({'background': color});
    event.preventDefault();
  });
  $('button').keypress(function() {
    var color = $('input').val();
    $('.brush').css({'background': color});
    event.preventDefault();
  });
  var count = 20;
  while( count > 0) {
    var new_div = $('<div></div>').addClass("square");
    $('body').append(new_div);
    count--;
    console.log(count);
  };
  // $('.square').on("click", function(){
  //   this.style.backgroundColor = 'green';
  // });
});




