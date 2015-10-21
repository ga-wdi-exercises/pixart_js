$(document).ready(function(){


  $("#set-color").on("click", function(){
    event.preventDefault();
    $(".brush").css("background", $("input").val());
  });

  $("#set-color").keydown(function(event){
    if (event.keyCode === 13); {
      event.preventDefault();
    $(".brush").css("background", $("input").val());
    }
  });

  for (i = 0; i < 8000; i++) {
    $("<div></div>").attr("class", "square").appendTo($("body"));
}


    // $(".square").css({
    //   "width": "10px",
    //   "height": "10px",
    //   "margin": "0",
    // });

$(".square").on("mouseover", function(){
  $(this).css("background", $("input").val());
});
    // $(".square"+[i]).on("click", function(){
    //   $(".square"+[i]).css({
    //     "background": "green",
    //   });
    // });







});
