
$(document).ready(function(){
    $("button").on("click", function(){
      var color = $("#color-field").val();
      console.log(color);
      $(".brush").css("background",color);
      event.preventDefault();
    })


      for (a = 0; a < 8000; a++){
        $('body').append("<div class='square'></div>")
      }





    $(".square").on("mouseover", function(){
      var color = $("#color-field").val();
      $(this).css("background",color);
    })
});
