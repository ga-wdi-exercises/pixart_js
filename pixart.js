$(document).ready(function(){

  var clickcount=1;

  $("#set-color").on("click", function(){
    event.preventDefault();
    var brushColor = $("input").val();
    if (clickcount==1) {
      $(".brush").css("background-color", brushColor);
      clickcount++;
    } else if (clickcount==2) {
      $(".swatch").eq(0).css("background-color", brushColor);
      clickcount++;
    } else if (clickcount==3) {
      $(".swatch").eq(1).css("background-color", brushColor);
      clickcount=1;
    }
  });


  var $newdiv;
  for (var i=0; i<=8000; i++){
    $newdiv = $('<div class="square" />');
    $('body').append($newdiv);
  }

  var $newbrush;
  for (i=0; i<=1; i++){
    $newbrush= $('<div class="swatch"/>');
    $(".controls").append($newbrush);
  }

  // var $swatchcolor;
  // $(".swatch").on("click", function (){
  //   var $swatchcolor = $(this).css("background-color");
  //   console.log(swatchcolor);
  // });


  $(".square").on("mouseover", function(){
    var brushColor = $("input").val();
    $(this).css("background-color", brushColor);
  });

});
