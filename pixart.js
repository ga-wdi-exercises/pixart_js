




$(document).ready(function() {
  var color;
  var storedColors = ['white','white','white'];
//storedColors[0);
  $('#brush1').css('background-color', storedColors[0]);
  $('#brush2').css('background-color', storedColors[1]);
  $('#brush3').css('background-color', storedColors[2]);

  //Commit 1
  $("#set-color").on("click", function(){
    event.preventDefault();
    color = $('#color-field').select().val();
    if (color === ""){
      alert('Please enter a valid color name, hex value, or rgb value');
    }
    else {
      changeColor();
      //$('.brush').css('background-color', color);
    }
  });

    $(".brush").on("click", function(){
      event.preventDefault();
      color = $(this).css('background-color');
      changeColor();
  });

  function changeColor() {
    storedColors.unshift(color);
    storedColors.pop();
    $('#brush1').css('background-color', storedColors[0]);
    $('#brush2').css('background-color', storedColors[1]);
    $('#brush3').css('background-color', storedColors[2]);

  }

  //Commit 2
  $('#usersSearch').keypress(function(e){
    event.preventDefault();
    color = $('#color-field').select().val();
      changeColor();
      //$('.brush').css('background-color', color);
  });

  //Commit 3/6
    for (i=0;i<8000;i++) {
      $("body").append("<div class='square'></div>");
    }

  //Commit 4/5
  $('.square').mouseover(function () {
    event.preventDefault();
    color = storedColors[0];

    if (color === ""){
      $(this).css('background-color', '#E7E5DB');
    }
    else {
      $(this).css('background-color', color);
    }

  //Commit Bonus

  });
});
