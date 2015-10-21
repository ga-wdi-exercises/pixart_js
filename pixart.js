// When I clock "set color", it should change the color of the "brush" box to the color I specify in the input field.
var setColor = $('#set-color');
// $('#set-color');
setColor.on("click", function(evt) {
   evt.preventDefault();
   console.log("change color");
   $(".brush").css( "background", $("#color-field").val() );
  });

  // Use jQuery to select the element, and `addEventListener` to handle clicks

  $("body").on("click", function(evt){
    evt.preventDefault();
    console.log("change color");
  });
