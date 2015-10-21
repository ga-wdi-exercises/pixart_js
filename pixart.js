$(document).ready(function(){

  $("#set-color").on("click", function(evt){
    colorText = $("#color-field").val();
    evt.preventDefault();
    $(".brush").css("background", colorText);
  })

  var index = 0;
  for (var i=0; i<=20; i++){
    $( "body" ).append( "<div class = 'square'></div>" );

    // $( ".square" ).eq(i).attr( "name","sqr"+[i]);

    $(".square").each(function(index){
      $(this).on("click", function(){
        $(".square").eq(index).css("background", "green");
      })
    });
  }
})
