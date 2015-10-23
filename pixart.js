 $( document ).ready( function(){

//---------------- Sets up the page

   //Sets default brush box value
   $("#color-field").val("#DB200A");

   //Appends canvas squares to body on load
   for(i = 0; i < 18000; i++){
     $(".drawcanvas").append("<div class=\"square\"></div>");
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
      $(".brush1").css("background-color", $("#color-field").val());
      console.log("a click occurred");
    });

    //Fills brush box bg with red on red box click
    $(".brush2").click(function(){
      event.preventDefault();
      $(".brush1").css("background-color", "#DB200A");
      $("#color-field").val("#DB200A");
    });

    //Fills brush box bg with blue on blue box click
    $(".brush3").click(function(){
      event.preventDefault();
      $(".brush1").css("background-color", "#FEF8FF");
      $("#color-field").val("#FEF8FF");
    });

    //Fills brush box bg with black on black box click
    $(".brush4").click(function(){
      event.preventDefault();
      $(".brush1").css("background-color", "#FFCA3D");
      $("#color-field").val("#FFCA3D");
    });

    //Fills brush box bg with white on white box click
    $(".brush5").click(function(){
      event.preventDefault();
      $(".brush1").css("background-color", "#6386F4");
      $("#color-field").val("#6386F4");
    });

    //Fills brush box bg with yellow on yellow box click
    $(".brush6").click(function(){
      event.preventDefault();
      $(".brush1").css("background-color", "#3AE852");
      $("#color-field").val("#3AE852");
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

///---------------------- Reset button (Not working)

//  $("#reset").click(function(){
//    event.preventDefault();
//    $(".square").css("background-color", rgba(0,0,0,0));
//  });

});
