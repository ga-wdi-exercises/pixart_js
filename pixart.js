$(document).ready(function(){

  $("#set-color").on("click", function(evt){
    colorText = $("#color-field").val();
    evt.preventDefault();
    $(".brush").css("background", colorText);
  })

  for (var i=0; i<=20; i++){
    $( "body" ).append( "<div class = 'square'></div>" );

  };

})
