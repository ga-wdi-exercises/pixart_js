$(document).ready(function(){
  var input = $('input').val();
  var button = $('#set-color')

//why does entering button works here?? Wouldn't it be a separte event listener?
  button.on('click', function() {
    event.preventDefault();
    input = $('input').val();
    // console.log(input);
    $('.brush').css('background', input)
  })


  for (var i = 0; i < 8000; i++) {
    var newDiv = $("<div class='square'/>");
    $('body').append(newDiv);

    }

    $('.square').on('mouseover', function() {
      $(this).css('background', input)
    })

    // console.log(newDiv);

});
