 $( document ).ready( function(){

//---------------- Sets up the page

   //Sets default brush box value
   $("#color-field").val("#FF0000");

   //Appends canvas squares to body on load
   for(i = 0; i < 18000; i++){
     $(".canvas").append("<div class=\"square\"></div>");
   }

//---------------- Color selector

   //Fills brush box bg with hex color from input on Enter keydown
   //@@@@ TODO: Fix this.
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

//---------------- Drag to Draw

    //Sets drag checker default state to off
    var isDragging = false;

    //Changes canvas square color when clicked & fires drag checker
    $(".square").mousedown(function(){
      event.preventDefault();
      $(this).css("background-color", $("#color-field").val());
      isDragging = true;
    });

    //Turns off drag checker on mouseup
    $("body").mouseup(function(){
      isDragging = false;
    });

    //Changes canvas square color on drag
    $(".square").mouseenter(function(){
        if (isDragging === true) {
          $(this).css("background-color", $("#color-field").val());
        }
    });

});
