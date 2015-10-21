$(document).ready(function(){


  $("#set-color").click(function(){
    event.preventDefault();
    $(".brush").css("background", $("input").val());
  });

  $("#set-color").keydown(function(event){
    if (event.keyCode === 13); {
      event.preventDefault();
    $(".brush").css("background", $("input").val());
    }
  });

  for (i = 0; i < 20; i++) {
    $("body").append("<div></div>");
    $("body div").attr("class", "square");


  }

  //

});
