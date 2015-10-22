 $( document ).ready( function(){

  $("color-field").keydown(function(){
    if(e.keyCode == 13){
      event.preventDefault();
      $(".brush").css("background-color", $("#color-field").val());
    }
  });

  $("#set-color").click(function(){
     event.preventDefault();
    $(".brush").css("background-color", $("#color-field").val());
  });

});
