$(document).ready(function(){

//why does entering button works here?? Wouldn't it be a separte event listener?
  $('button').on('click', function() {
    event.preventDefault();
    var input = $('input').val();
    console.log(input);
    $('.brush').css('background', 'red')
  })

});
