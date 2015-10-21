$(document).ready(function(){

  $("#set-color").on("click", function(evt){
    var colorText = $("#color-field").val();
    evt.preventDefault();
    $(".brush").css("background", colorText);
  })

  for (var i=0; i<=1000; i++){
    $( "body" ).append( "<div class = 'square'></div>" );

    // $( ".square" ).eq(i).attr( "name","sqr"+[i]);
    $(".square").each(function(index){
      $(this).on("mouseover", function(){
        colorText = $("#color-field").val();
        $(".square").eq(index).css("background", colorText);
      })
    });
  }

  $(".square").css({"height": "10px","width":"10px","margin":"0"});

})
