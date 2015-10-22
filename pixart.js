 $( document ).ready( function(){

   //Sets default brush box value
   $("#color-field").val("#22466E");

   //Appends canvas squares to body on load
   for(i = 0; i < 6000; i++){
     $("body").append("<div class=\"square\"></div>");
   }

   //Fills brush box bg with hex color from input on Enter keydown
   $("color-field").keydown(function(){
      if(e.keyCode == 13){
        event.preventDefault();
        $(".brush").css("background-color", $("#color-field").val());
        console.log("the enter key was pressed");
      }
    });

    //Fills brush box bg with hex color from input on button click
    $("#set-color").click(function(){
      event.preventDefault();
      $(".brush").css("background-color", $("#color-field").val());
      console.log("a click occurred");
    });

    //Changes canvas square color when clicked
    $(".square").hover(function(){
      event.preventDefault();
      $(this).css("background-color", $("#color-field").val());
    });

});
