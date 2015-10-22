var clickCount = 0;

$(document).ready(function(){
  $( ".controls" ).append( "<div class = 'brush'></div>" );
  // $(".brush2").css({"height": "100px","width":"100px","background":"#1B4370","margin":"15px auto"})

  $( ".controls" ).append( "<div class = 'brush'></div>" );
  // $(".brush3").css({"height": "100px","width":"100px","background":"#1B4370","margin":"15px auto"})

  $("#set-color").on("click", function(evt){
    var colorText = $("#color-field").val();
    evt.preventDefault();
    $(".brush").eq(clickCount).css("background", colorText);
    if (clickCount < 2) {
      clickCount++
    } else {
      clickCount = 0
    }
  })


  for (var i=0; i<=8000; i++){
    $( "body" ).append( "<div class = 'square'></div>" );

    // $( ".square" ).eq(i).attr( "name","sqr"+[i]);
    // $(".square").each(function(index){
    //   $(this).on("mouseover", function(){
    //     colorText = $("#color-field").val();
    //     $(this).css("background", colorText);
    //   })
    // });
  }


  $(".square").on("mouseover", function(){
    colorText = $("#color-field").val();
    $(this).css("background", colorText);
  });

  $(".square").css({"height": "10px","width":"10px","margin":"0"});

})


// git checkout test



  // if(clickCount === 0){
  //   $("#set-color").on("click", function(evt){
  //     var colorText = $("#color-field").val();
  //     evt.preventDefault();
  //     $(".brush").eq(clickCount).css("background", colorText);
  //     clickCount++
  //   })
  //   $("#set-color").keydown(function(evt) {
  //     if ( evt.keycode == 13 ) {
  //       event.preventDefault();
  //       $(".brush").eq(clickCount).css("background", colorText);
  //     }
  //   })
  // } else if (clickCount === 1) {
  //   $("#set-color").on("click", function(evt){
  //     var colorText = $("#color-field").val();
  //     evt.preventDefault();
  //     $(".brush").eq(clickCount).css("background", colorText);
  //     clickCount++
  //   })
  //   $("#set-color").keydown(function(evt) {
  //     if ( evt.keycode == 13 ) {
  //       event.preventDefault();
  //       $(".brush").eq(clickCount).css("background", colorText);
  //     }
  //   })
  //
  // } else if (clickCount >1) {
  //   $("#set-color").on("click", function(evt){
  //     var colorText = $("#color-field").val();
  //     evt.preventDefault();
  //     $(".brush").eq(clickCount).css("background", colorText);
  //     clickCount=0;
  //   })
  //   $("#set-color").keydown(function(evt) {
  //     if ( evt.keycode == 13 ) {
  //       event.preventDefault();
  //       $(".brush").eq(clickCount).css("background", colorText);
  //       clickCount=0;
  //     }
  //   })
  // }
