$(document).ready(function(){
  console.log("YOOOO")

    var colorInput = $("#color-field").val();
    var button = $("#set-color");
    var body = $("body");

    function changeColor (){
      $(".brush").css("background-color", $("#color-field").val());
      event.preventDefault();
    }

    function updateColor (){
      $(this).css("background-color", $("#color-field").val());
    }

    button.on("click", changeColor);

    for (i=0; i<8000; i++) {
      body.append("<div class='square'></div>");
     }

     $(".square").mouseover(function() {
       $(this).css("background-color", $("#color-field").val());
     })
})
