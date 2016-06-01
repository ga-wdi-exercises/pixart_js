
$(document).ready(function(){
    $("button").on("click", function(){
      var color = $("#color-field").val();
      console.log(color);
      $(".brush").css("background",color);
      event.preventDefault();
    })

    function loadSquares(){
      for (a = 0; a < 21; a++){
        $('body').append("<div class='square'></div>")
      }
    };

    loadSquares();


    $(".square").on("click"), function(){
      var color = $("#color-field").val();
      $(this).css("background",color);
    }
});
