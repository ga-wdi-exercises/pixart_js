
$(document).ready(function(){
  $("#set-color").on("click", function(){
  event.preventDefault();
  var brushColor = $("input").val();
  $(".brush").css("background-color", brushColor);
  $("#color-field").keypress(fucntion(){
    if (keyCode == 13) {$(".brush").css("background-color", brushCollor);
    }
  });


});
});
