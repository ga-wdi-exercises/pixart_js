

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
$(document).ready(function() {
    for (i=0;i<20;i++) {
      $("body").append("<div class='square'></div>");
    }
});
