




$(document).ready(function() {

  //Commit 1
  $("#set-color").on("click", function(){
    event.preventDefault();
    var x = $('#color-field').select().val();
      $('.brush').css('background-color', x);
  });

  //Commit 2
  $('#usersSearch').keypress(function(e){
    event.preventDefault();
    var x = $('#color-field').select().val();
      $('.brush').css('background-color', x);
  });

  //Commit 3
    for (i=0;i<20;i++) {
      $("body").append("<div class='square'></div>");
    }

  //Commit 4
  $('.square').on('click', function () {
    $(this).css('background-color', 'green');
  });

  //Commit 5
  

});
