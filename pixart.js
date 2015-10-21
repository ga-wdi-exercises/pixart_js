$(document).ready(function(){


  $("#set-color").click(function(){
    event.preventDefault();
    $(".brush").css("background", $("input").val());
  });

  // $("#set-color").click(function(){
  //   event.preventDefault();
  //   $(".brush").css("background", $("input").val());
  // });

  //

});
