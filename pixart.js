$( document ).ready(function(){
  $("#set-color").on("click", function(event){
    event.preventDefault();
    var color = $("#color-field").val();
    $(".brush").css("background-color", color);
  });

  for(i=0; i<8000; i++) {
    $("body").append("<div class='square'><div>");
    };

  $(".square").on("mouseover", function(){
    var color = $(".brush").css("background-color");
    $(this).css("background-color",color);

  });

});
